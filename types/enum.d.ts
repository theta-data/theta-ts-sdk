export declare enum THETA_CHAIN_ID_ENUM {
    MainNet = "https://theta-bridge-rpc.thetatoken.org/rpc",
    TestNet = "http://theta-node-rpc-testnet.thetatoken.org:16888/rpc",
    PrivateNet = "https://theta-node-rpc-smart-contract-sandbox.thetatoken.org/rpc"
}
export declare enum THETA_BLOCK_STATUS_ENUM {
    pending = 0,
    valid = 1,
    invalid = 2,
    committed = 3,
    directly_finalized = 4,
    indirectly_finalized = 5,
    trusted = 6
}
export declare enum THETA_TRANSACTION_TYPE_ENUM {
    coinbase = 0,
    slash = 1,
    send = 2,
    reserve_fund = 3,
    release_fund = 4,
    service_payment = 5,
    split_rule = 6,
    smart_contract = 7,
    deposit_stake = 8,
    withdraw_stake = 9
}
export declare enum THETA_METHOD_ENUM {
    GetAccount = "theta.GetAccount",
    BroadcastRawTransaction = "theta.BroadcastRawTransaction",
    GetBlock = "theta.GetBlock",
    GetBlockByHeight = "theta.GetBlockByHeight",
    GetTransaction = "theta.GetTransaction",
    CallSmartContract = "theta.CallSmartContract"
}
