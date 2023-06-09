// @generated by protoc-gen-connect-web v0.3.1 with parameter "target=ts"
// @generated from file tendermint/abci/types.proto (package tendermint.abci, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {RequestApplySnapshotChunk, RequestCheckTx, RequestCommit, RequestEcho, RequestExtendVote, RequestFinalizeBlock, RequestFlush, RequestInfo, RequestInitChain, RequestListSnapshots, RequestLoadSnapshotChunk, RequestOfferSnapshot, RequestPrepareProposal, RequestProcessProposal, RequestQuery, RequestVerifyVoteExtension, ResponseApplySnapshotChunk, ResponseCheckTx, ResponseCommit, ResponseEcho, ResponseExtendVote, ResponseFinalizeBlock, ResponseFlush, ResponseInfo, ResponseInitChain, ResponseListSnapshots, ResponseLoadSnapshotChunk, ResponseOfferSnapshot, ResponsePrepareProposal, ResponseProcessProposal, ResponseQuery, ResponseVerifyVoteExtension} from "./types_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service tendermint.abci.ABCI
 */
export const ABCI = {
  typeName: "tendermint.abci.ABCI",
  methods: {
    /**
     * @generated from rpc tendermint.abci.ABCI.Echo
     */
    echo: {
      name: "Echo",
      I: RequestEcho,
      O: ResponseEcho,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.Flush
     */
    flush: {
      name: "Flush",
      I: RequestFlush,
      O: ResponseFlush,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.Info
     */
    info: {
      name: "Info",
      I: RequestInfo,
      O: ResponseInfo,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.CheckTx
     */
    checkTx: {
      name: "CheckTx",
      I: RequestCheckTx,
      O: ResponseCheckTx,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.Query
     */
    query: {
      name: "Query",
      I: RequestQuery,
      O: ResponseQuery,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.Commit
     */
    commit: {
      name: "Commit",
      I: RequestCommit,
      O: ResponseCommit,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.InitChain
     */
    initChain: {
      name: "InitChain",
      I: RequestInitChain,
      O: ResponseInitChain,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.ListSnapshots
     */
    listSnapshots: {
      name: "ListSnapshots",
      I: RequestListSnapshots,
      O: ResponseListSnapshots,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.OfferSnapshot
     */
    offerSnapshot: {
      name: "OfferSnapshot",
      I: RequestOfferSnapshot,
      O: ResponseOfferSnapshot,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.LoadSnapshotChunk
     */
    loadSnapshotChunk: {
      name: "LoadSnapshotChunk",
      I: RequestLoadSnapshotChunk,
      O: ResponseLoadSnapshotChunk,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.ApplySnapshotChunk
     */
    applySnapshotChunk: {
      name: "ApplySnapshotChunk",
      I: RequestApplySnapshotChunk,
      O: ResponseApplySnapshotChunk,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.PrepareProposal
     */
    prepareProposal: {
      name: "PrepareProposal",
      I: RequestPrepareProposal,
      O: ResponsePrepareProposal,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.ProcessProposal
     */
    processProposal: {
      name: "ProcessProposal",
      I: RequestProcessProposal,
      O: ResponseProcessProposal,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.ExtendVote
     */
    extendVote: {
      name: "ExtendVote",
      I: RequestExtendVote,
      O: ResponseExtendVote,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.VerifyVoteExtension
     */
    verifyVoteExtension: {
      name: "VerifyVoteExtension",
      I: RequestVerifyVoteExtension,
      O: ResponseVerifyVoteExtension,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tendermint.abci.ABCI.FinalizeBlock
     */
    finalizeBlock: {
      name: "FinalizeBlock",
      I: RequestFinalizeBlock,
      O: ResponseFinalizeBlock,
      kind: MethodKind.Unary,
    },
  }
} as const;

