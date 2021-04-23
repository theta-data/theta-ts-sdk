import { THETA_BLOCK_STATUS_ENUM, THETA_TRANSACTION_TYPE_ENUM } from './enum';
export interface THETA_NETWORK_INTERFACE {
    chainId: string;
    name?: string;
    rpcUrl: string;
    explorerUrl: string;
}
export interface THETA_BLOCK_INTERFACE {
    "jsonrpc": "2.0";
    "id": number;
    "result": {
        "chain_id": "mainnet" | "testnet";
        "epoch": string;
        "height": string;
        "parent": string;
        "transactions_hash": string;
        "state_hash": string;
        "timestamp": string;
        "proposer": string;
        "hcc": {
            "Votes": Array<{
                "Block": string;
                "Height": number;
                "Epoch": number;
                "ID": string;
                "Signature": string;
            }>;
            "BlockHash": string;
        };
        "guardian_votes": null;
        "children": Array<string>;
        "status": THETA_BLOCK_STATUS_ENUM;
        "hash": string;
        "transactions": Array<{
            "raw": {
                "proposer": {
                    "address": string;
                    "coins": {
                        "thetawei": string;
                        "tfuelwei": string;
                    };
                    "sequence": string;
                    "signature": string;
                };
                "outputs": [
                ];
                "block_height": string;
            };
            "type": THETA_TRANSACTION_TYPE_ENUM;
            "hash": string;
            "receipt": null;
        }>;
    };
}
export interface HTTP_PROVIDER_INTERFACE {
    getBlock(blockHeight: number): Promise<THETA_BLOCK_INTERFACE>;
    getBlock(blockHash: string): Promise<THETA_BLOCK_INTERFACE>;
}
export interface THETA_METHOD_INTERFACE {
    method: 'theta.GetAccount' | 'theta.BroadcastRawTransaction';
}
