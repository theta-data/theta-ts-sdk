export enum THETA_CHAIN_ID_ENUM {
  MainNet = 'https://theta-bridge-rpc.thetatoken.org/rpc',
  TestNet = 'http://theta-node-rpc-testnet.thetatoken.org:16888/rpc',
  PrivateNet = 'https://theta-node-rpc-smart-contract-sandbox.thetatoken.org/rpc'
}

export enum THETA_BLOCK_STATUS_ENUM {
  pending,
  valid,
  invalid,
  committed,
  directly_finalized,
  indirectly_finalized,
  trusted
}

export enum THETA_TRANSACTION_TYPE_ENUM {
  coinbase,
  slash,
  send,
  reserve_fund,
  release_fund,
  service_payment,
  split_rule,
  smart_contract,
  deposit_stake,
  withdraw_stake
}

export enum THETA_METHOD_ENUM {
  GetAccount = 'theta.GetAccount',
  BroadcastRawTransaction = 'theta.BroadcastRawTransaction',
  GetBlock = 'theta.GetBlock',
  GetBlockByHeight = 'theta.GetBlockByHeight',
  GetTransaction = 'theta.GetTransaction',
  CallSmartContract = 'theta.CallSmartContract',
  GetVcpByHeight = 'theta.GetVcpByHeight',
  GetGcpByHeight = 'theta.GetGcpByHeight',
  GetEenpByHeight = 'theta.GetEenpByHeight',
  GetStatus = 'theta.GetStatus',
  GetVersion = 'theta.GetVersion',
  GetPendingTransactions = 'theta.GetPendingTransactions',
  GetStakeRewardDistributionByHeight = 'theta.GetStakeRewardDistributionByHeight'
  // CallSmartContract

  // GetAccount = 'theta.GetAccount'
}
