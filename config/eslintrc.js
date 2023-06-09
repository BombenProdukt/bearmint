/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/recommended',
		'plugin:github/recommended',
		'plugin:github/typescript',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:n/recommended',
		'plugin:prettier/recommended',
		'plugin:promise/recommended',
		'plugin:security/recommended',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/all',
		'prettier',
		'turbo',
	],
	ignorePatterns: [
		'.eslintrc.js',
		'package.json',
		'packages/**/distribution',
		'packages/**/tests/**/*.ts',
		'packages/**/package.json',
		'packages/**/source/*_pb.ts',
		'packages/**/source/**/*_pb.ts',
		'scripts',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		extraFileExtensions: ['.json', '.mjs'],
		project: 'tsconfig.eslint.json',
		projectFolderIgnoreList: ['build', 'coverage', 'node_modules', 'public'],
	},
	plugins: [
		'@typescript-eslint',
		'escompat',
		'eslint-plugin-tsdoc',
		'github',
		'import',
		'prettier',
		'promise',
		'simple-import-sort',
		'sonarjs',
		'sort-class-members',
		'sort-destructure-keys',
		'sort-keys-fix',
		'unicorn',
		'unused-imports',
	],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple',
			},
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: false,
				types: {
					Boolean: {
						message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
					},
					Function: {
						message:
							'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
					},
					Number: {
						message: 'Avoid using the `Number` type. Did you mean `number`?',
					},
					Object: {
						message: 'Avoid using the `Object` type. Did you mean `object`?',
					},
					String: {
						message: 'Avoid using the `String` type. Did you mean `string`?',
					},
					Symbol: {
						message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
					},
				},
			},
		],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				format: ['camelCase'],
				leadingUnderscore: 'allow',
				selector: 'default',
				trailingUnderscore: 'allow',
			},
			{
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
				leadingUnderscore: 'allow',
				selector: ['variable', 'parameter'],
				trailingUnderscore: 'allow',
			},
			{
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
				selector: 'classProperty',
			},
			{
				format: ['UPPER_CASE', 'PascalCase'],
				selector: 'enumMember',
			},
			{
				format: ['camelCase'],
				leadingUnderscore: 'require',
				modifiers: ['private'],
				selector: 'memberLike',
			},
			{
				format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
				selector: ['objectLiteralProperty', 'objectLiteralMethod'],
			},
			{
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow',
				selector: 'typeProperty',
			},
			{
				format: ['PascalCase'],
				selector: 'typeLike',
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': 'warn',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/no-shadow': [
			'warn',
			{
				hoist: 'all',
			},
		],
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': [
			'warn',
			{
				allowAny: true,
			},
		],
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/strict-boolean-expressions': [
			'error',
			{
				allowAny: false,
				allowNullableObject: false,
				allowNumber: false,
				allowString: false,
			},
		],
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				lib: 'always',
				path: 'always',
				types: 'prefer-import',
			},
		],
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		'comma-dangle': ['error', 'always-multiline'],
		'constructor-super': 'error',
		curly: 'error',
		eqeqeq: ['error', 'always'],
		'eslint-comments/no-unlimited-disable': 'off',
		'eslint-comments/no-use': 'off',
		'filenames/match-regex': 'off',
		'guard-for-in': 'error',
		'i18n-text/no-en': 'off',
		'import/default': 'error',
		'import/export': 'error',
		'import/exports-last': 'error',
		'import/extensions': 'off',
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/namespace': 'error',
		'import/no-absolute-path': 'error',
		'import/no-anonymous-default-export': 'error',
		'import/no-commonjs': 'off',
		'import/no-cycle': 'error',
		'import/no-deprecated': 'warn',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'off',
		// 'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
		'import/no-extraneous-dependencies': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-namespace': 'off',
		'import/no-restricted-paths': 'error',
		'import/no-self-import': 'error',
		'import/no-unresolved': 'off',
		'import/no-unused-modules': 'error',
		'import/no-useless-path-segments': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'import/order': 'off',
		// 'import/order': [
		// 	'error',
		// 	{
		// 		alphabetize: {
		// 			order: 'asc',
		// 		},
		// 		groups: ['type', 'object', ['builtin', 'external'], 'parent', 'sibling', 'index'],
		// 		'newlines-between': 'always',
		// 	},
		// ],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'max-params': ['error', 5],
		'n/no-missing-import': 'off',
		'n/no-missing-require': 'off',
		'n/no-unpublished-import': 'off',
		'n/no-unsupported-features/es-builtins': [
			'error',
			{
				version: '>=16',
			},
		],
		'n/no-unsupported-features/es-syntax': 'off',
		'no-async-promise-executor': 'off',
		'no-bitwise': 'warn',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'off',
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'off',
		'no-empty': 'off',
		'no-eval': 'error',
		'no-extra-bind': 'error',
		'no-multi-spaces': 'error',
		'no-nested-ternary': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-only-tests/no-only-tests': 'off',
		'no-prototype-builtins': 'off',
		'no-sequences': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'warn',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-unneeded-ternary': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': 'off',
		'no-useless-concat': 'off',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'prefer-object-spread': 'error',
		'prefer-template': 'error',
		'prettier/prettier': [
			'off',
			{
				endOfLine: 'auto',
			},
		],
		'promise/always-return': 'error',
		'promise/param-names': 'error',
		quotes: ['error', 'single', { avoidEscape: true }],
		radix: 'error',
		'security/detect-non-literal-require': 'off',
		'security/detect-object-injection': 'off',
		semi: ['error', 'never'],
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'sonarjs/cognitive-complexity': ['error', 75],
		'sonarjs/no-duplicate-string': 'off',
		'sonarjs/no-nested-template-literals': 'error',
		// 'sort-class-members/sort-class-members': [
		// 	'error',
		// 	{
		// 		'accessorPairPositioning': 'getThenSet',
		// 		'order': [
		// 			'[static-properties]',
		// 			'[static-methods]',
		// 			'[properties]',
		// 			'[conventional-private-properties]',
		// 			'constructor',
		// 			'[methods]',
		// 			'[conventional-private-methods]',
		// 		],
		// 	},
		// ],
		'sort-destructure-keys/sort-destructure-keys': 'error',
		'sort-imports': 'off',
		// 'sort-imports': ['error', { ignoreDeclarationSort: true }],
		'sort-keys-fix/sort-keys-fix': [
			'error',
			'asc',
			{
				caseSensitive: true,
				natural: true,
			},
		],
		'space-before-function-paren': 'off',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/'],
			},
		],
		'tsdoc/syntax': 'warn',
		'unicorn/filename-case': 'warn',
		'unicorn/import-style': 'warn',
		'unicorn/no-abusive-eslint-disable': 'off',
		'unicorn/no-await-expression-member': 'off',
		'unicorn/no-keyword-prefix': ['error', { disallowedPrefixes: ['for'] }],
		'unicorn/no-useless-undefined': 'off',
		'unicorn/prefer-at': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-node-protocol': 'off',
		'unicorn/prefer-ternary': 'off',
		'unicorn/prefer-top-level-await': 'warn',
		'unicorn/prevent-abbreviations': [
			'warn',
			{
				allowList: {
					Args: true,
					Attr: true,
					DB: true,
					Env: true,
					Fn: true,
					Func: true,
					Idx: true,
					Max: true,
					Min: true,
					Msg: true,
					Msgs: true,
					Nil: true,
					Op: true,
					Ops: true,
					Opts: true,
					Params: true,
					PrivKey: true,
					Prop: true,
					Props: true,
					PubKey: true,
					Temp: true,
					Tx: true,
					Txs: true,
					args: true,
					attr: true,
					ctx: true,
					db: true,
					dst: true,
					dstStart: true,
					env: true,
					fn: true,
					func: true,
					idx: true,
					max: true,
					min: true,
					msg: true,
					msgs: true,
					nil: true,
					op: true,
					ops: true,
					opts: true,
					params: true,
					privKey: true,
					prop: true,
					props: true,
					pubKey: true,
					temp: true,
					tx: true,
					txs: true,
				},
			},
		],
		'use-isnan': 'error',
	},
}
