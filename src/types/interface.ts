import { THETA_BLOCK_STATUS_ENUM, THETA_TRANSACTION_TYPE_ENUM } from './enum'

export interface THETA_NETWORK_INTERFACE {
  chainId: string
  name?: string
  rpcUrl: string
  explorerUrl: string
}

export interface THETA_BLOCK_INTERFACE {
  jsonrpc: '2.0'
  id: number
  result: {
    chain_id: 'mainnet' | 'testnet'
    epoch: string
    height: string
    parent: string
    transactions_hash: string
    state_hash: string
    timestamp: string
    proposer: string
    hcc: {
      Votes: Array<{
        Block: string
        Height: number
        Epoch: number
        ID: string
        Signature: string
      }>
      BlockHash: string
    }
    guardian_votes: null
    children: Array<string>
    status: THETA_BLOCK_STATUS_ENUM
    hash: string
    transactions: Array<{
      raw: {
        proposer: {
          address: string
          coins: {
            thetawei: string
            tfuelwei: string
          }
          sequence: string
          signature: string
        }
        fee?: {
          thetawei: string //"0",
          tfuelwei: string //"1000000000000"
        }
        inputs?: Array<{
          address: string //'0x26239129266c3f46009287294e0ed63fb198de62'
          coins: {
            thetawei: string //'0'
            tfuelwei: string //'11000001000000000000'
          }
          sequence: string //'2038643'
          signature: string //'0x19d7ed0fb61e2dff057c167260e38d62035d53429566a5c2a6618b2181948ca040ab47c8785a10bfd41164135983faee48d2b92ce54523dacc8db0a5306c98ea00'
        }>
        outputs?: Array<{
          address: string //'0x786f1cf0a576a61eeea0bc7fa92041a5f541381a'
          coins: {
            thetawei: string //'0'
            tfuelwei: string //'11000000000000000000'
          }
        }>
        block_height: string
        holder?: {
          address: string //"0x162841f679948ec58ffd8f4277037228a6c04943",
          coins: {
            thetawei: string //"0",
            tfuelwei: string //"0"
          }
        }
        source?: {
          address: string //'0x502e2b42b45f1e5a14fbf2b0047e9f65a327c0bf'
          coins: {
            thetawei: string //'0'
            tfuelwei: string //'0'
          }
          sequence: string //'4'
          signature: string //'0x6017f2f9c6c5815e2cd49c38bf2cb6953532c16802b89f27e035fcdd3176e070670c44ecf9351b9735dbf97868da1dee584ac49f0bdc94a01d06f06bc7967b4a01'
        }
        purpose?: number // 1
      }
      type: THETA_TRANSACTION_TYPE_ENUM
      hash: string
      receipt: null
    }>
  }
}

export interface HTTP_PROVIDER_INTERFACE {
  getBlock(blockHeight: number): Promise<THETA_BLOCK_INTERFACE>
  getBlock(blockHash: string): Promise<THETA_BLOCK_INTERFACE>
}

export interface THETA_METHOD_INTERFACE {
  method: 'theta.GetAccount' | 'theta.BroadcastRawTransaction'
}

export interface THETA_VCP_INTERFACE {
  jsonrpc: '2.0'
  id: number //1
  result: {
    BlockHashVcpPairs: [
      {
        BlockHash: string //'0x2275be25fa5f7081acccd363e520d1380f2f85f557f119d59b617bc0c927cfc4'
        Vcp: {
          SortedCandidates: Array<{
            Holder: string //'0x80eab22e27d4b94511f5906484369b868d6552d2'
            Stakes: Array<{
              source: string //'0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8'
              amount: string //'20000000000000000000000000'
              withdrawn: boolean // false
              return_height: string //'18446744073709551615'
            }>
          }>
        }
        HeightList: {
          Heights: Array<number>
        }
      }
    ]
  }
}

export interface THETA_GCP_INTERFACE {
  jsonrpc: string //'2.0'
  id: number //1
  result: {
    BlockHashGcpPairs: [
      {
        BlockHash: string //'0x2275be25fa5f7081acccd363e520d1380f2f85f557f119d59b617bc0c927cfc4'
        Gcp: {
          SortedGuardians: Array<{
            Holder: string //'0x80eab22e27d4b94511f5906484369b868d6552d2'
            Stakes: Array<{
              source: string //'0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8'
              amount: string //'20000000000000000000000000'
              withdrawn: boolean // false
              return_height: string //'18446744073709551615'
            }>
          }>
        }
        HeightList: {
          Heights: Array<number>
        }
      }
    ]
  }
}

export interface THETA_EENP_INTERFACE {
  jsonrpc: string //'2.0'
  id: number //1
  result: {
    BlockHashEenpPairs: [
      {
        BlockHash: string //'0x2275be25fa5f7081acccd363e520d1380f2f85f557f119d59b617bc0c927cfc4'
        EENs: {
          SortedGuardians: Array<{
            Holder: string //'0x80eab22e27d4b94511f5906484369b868d6552d2'
            Stakes: Array<{
              source: string //'0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8'
              amount: string //'20000000000000000000000000'
              withdrawn: boolean // false
              return_height: string //'18446744073709551615'
            }>
          }>
        }
        HeightList: {
          Heights: Array<number>
        }
      }
    ]
  }
}
