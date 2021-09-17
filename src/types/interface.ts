import { THETA_BLOCK_STATUS_ENUM, THETA_TRANSACTION_TYPE_ENUM } from './enum'
import { CmcHttpProvider } from '../providers/CmcHttpProvider'
import { ThetaHttpProvider } from '../providers/ThetaHttpProvider'

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
    guardian_votes: null | {
      Block: string
      Gcp: string
      Multiplies: Array<number>
    }
    elite_edge_node_votes: null | {
      Block: string
      Multiplies: Array<number>
      Addresses: Array<string>
    }
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
        EENs: Array<{
          Holder: string //'0x80eab22e27d4b94511f5906484369b868d6552d2'
          Stakes: Array<{
            source: string //'0x4aefa39caeadd662ae31ab0ce7c8c2c9c0a013e8'
            amount: string //'20000000000000000000000000'
            withdrawn: boolean // false
            return_height: string //'18446744073709551615'
          }>
        }>
        HeightList: {
          Heights: Array<number>
        }
      }
    ]
  }
}

export interface THETA_NODE_STATUS {
  jsonrpc: '2.0'
  id: 1
  result: {
    address: string //'0x1676d4D39cbC7519De75878765Fdde964B432732'
    chain_id: string //'mainnet'
    peer_id: string //'0x1676d4D39cbC7519De75878765Fdde964B432732'
    latest_finalized_block_hash: string //'0x6fc056d88b59285d3c1fadf192cb6aab7128ba3eb110bc076f69fd2230101117'
    latest_finalized_block_height: string //'11798375'
    latest_finalized_block_time: string //'1630400947'
    latest_finalized_block_epoch: string //'11880229'
    current_epoch: string //'11880231'
    current_height: string //'11798375'
    current_time: string //'1630400964'
    syncing: false
    genesis_block_hash: '0xd8836c6cf3c3ccea0b015b4ed0f9efb0ffe6254db793a515843c9d0f68cbab65'
  }
}

export interface THETA_GET_VERSION_INTERFACE {
  jsonrpc: string //'2.0'
  id: number //1
  result: {
    version: string //'1.0'
    git_hash: string //'9d7669a735063a283ae8b6f0826183e3830c00a5'
    timestamp: string //'Tue Feb 19 23:31:32 UTC 2019'
  }
}

export interface THETA_GET_ACCOUNT_INTERFACE {
  jsonrpc: string //'2.0'
  id: number //1
  result: {
    sequence: number //'1'
    coins: {
      thetawei: string //'994999990000000000000000000'
      tfuelwei: string //'4999999979999999000000000000'
    }
    reserved_funds: Array<number> // []
    last_updated_block_height: string //'0'
    root: string //'0x0000000000000000000000000000000000000000000000000000000000000000'
    code: string //'0x0000000000000000000000000000000000000000000000000000000000000000'
  }
}

export interface THETA_TRANSACTION_INTERFACE {
  jsonrpc: string //'2.0'
  id: number //1
  result: {
    block_hash: string //'0x9f1e77b08c9fa8984096a735d0aae6b0e43aee297e42c54ce36334103ddd67a7'
    block_height: string //'3'
    status: string //'finalized'
    hash: string //'0xf3cc94af7a1520b384999ad106ade9738b6cde66e2377ceab37067329d7173a0'
    transaction: {
      fee: {
        thetawei: string // '0'
        tfuelwei: string //'1000000000000'
      }
      inputs: Array<{
        address: string //'0x2e833968e5bb786ae419c4d13189fb081cc43bab'
        coins: {
          thetawei: string //'10000000000000000000'
          tfuelwei: string //'20000001000000000000'
        }
        sequence: string //'1'
        signature: string //'0x2f8f17b13c07e57d4c5d2c89e87d9e608f0eff22ef1f96eed5647b063265450216ef4f7a8578bf702cf26db00fb2e758521873bb1b68528325c84b59a2debc7400'
      }>
      outputs: Array<{
        address: string //'0x9f1233798e905e173560071255140b4a8abd3ec6'
        coins: {
          thetawei: string //'10000000000000000000'
          tfuelwei: string //'20000000000000000000'
        }
      }>
    }
  }
}

// export interface THETA_GET_BLOCK_INTERFACE {
//   jsonrpc: string //'2.0'
//   id: number //1
//   result: {
//     chain_id: string //'privatenet'
//     epoch: string //'5'
//     height: string //'3'
//     parent: string //'0x724b0f68d8e45f930b95bac224fa7d67eef243307b4e84f0f666198d1d70e9d7'
//     transactions_hash: string //'0x2bf2c62185fceed239a55bd27ada030cf75970f09122addb2e419e70cafebdf0'
//     state_hash: string //'0xd41742c2b0d70e3bac1d88b2af69a2491d8c65c650af6ec4d2b8873897f8becc'
//     timestamp: string //'1548102762'
//     proposer: string // '0x2e833968e5bb786ae419c4d13189fb081cc43bab'
//     children: Array<string> //['0x21d3c2bb25d0c85a1f5c3ff81bc7eeae998bf98db1dba461fb3f69a434feb90c']
//     status: THETA_BLOCK_STATUS_ENUM //4
//     hash: string //'0x9f1e77b08c9fa8984096a735d0aae6b0e43aee297e42c54ce36334103ddd67a7'
//     transactions: [
//       {
//         raw: {
//           proposer: {
//             address: '0x2e833968e5bb786ae419c4d13189fb081cc43bab'
//             coins: {
//               thetawei: '0'
//               tfuelwei: '0'
//             }
//             sequence: '0'
//             signature: '0x31af035f0dc47ded00eb5139fd5e4bb76f82e89e29adae60df1277a25b0c7b135b097502ff0aa66249a423d22f291804a9e178af59c24ccbf1af2f58b83964ef00'
//           }
//           outputs: [
//             {
//               address: '0x2e833968e5bb786ae419c4d13189fb081cc43bab'
//               coins: {
//                 thetawei: '0'
//                 tfuelwei: '0'
//               }
//             }
//           ]
//           block_height: '2'
//         }
//         type: 0
//         hash: '0x642f7d70680eefcc34f750cd6e03b57035f197baeabfa8e8420f55d994f5265f'
//       },
//       {
//         raw: {
//           fee: {
//             thetawei: '0'
//             tfuelwei: '1000000000000'
//           }
//           inputs: [
//             {
//               address: '0x2e833968e5bb786ae419c4d13189fb081cc43bab'
//               coins: {
//                 thetawei: '10000000000000000000'
//                 tfuelwei: '20000001000000000000'
//               }
//               sequence: '1'
//               signature: '0x2f8f17b13c07e57d4c5d2c89e87d9e608f0eff22ef1f96eed5647b063265450216ef4f7a8578bf702cf26db00fb2e758521873bb1b68528325c84b59a2debc7400'
//             }
//           ]
//           outputs: [
//             {
//               address: '0x9f1233798e905e173560071255140b4a8abd3ec6'
//               coins: {
//                 thetawei: '10000000000000000000'
//                 tfuelwei: '20000000000000000000'
//               }
//             }
//           ]
//         }
//         type: 2
//         hash: '0xf3cc94af7a1520b384999ad106ade9738b6cde66e2377ceab37067329d7173a0'
//       }
//     ]
//   }
// }

export interface CMC_PRICE_INFORMATION {
  name: string
  price: number
  volume_24h: number
  market_cap: number
  total_supply: number
  circulating_supply: number
  last_updated: string
}

export interface THETA_TS_SDK {
  cmc: CmcHttpProvider
  blockchain: ThetaHttpProvider
}
