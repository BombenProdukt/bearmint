import type { Cradle, ServiceProvider, Tendermint } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { createGrpcServer } from './grpc/server.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async boot() {
			// Read the `proxy_app` value from `$CMTHOME/config/config.toml`
			const [hostname, port] = cradle.TendermintConfiguration.proxy_app.split(':')

			cradle.Container.resolve<Tendermint>(ContainerType.Tendermint).boot(hostname, Number(port))
		},
		async dispose() {
			cradle.Container.resolve<Tendermint>(ContainerType.Tendermint).dispose()
		},
		async register() {
			cradle.Container.bindFunctionSingleton(ContainerType.Tendermint, createGrpcServer)
		},
	}
}
