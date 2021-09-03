Theta-ts-sdk is the typescript version sdk for The Theta Network.

## Features

* query block information from theta rpc interface
* supports customize the rpc url
* query price information from cmc

## Installation

```bash
npm install theta-ts-sdk --save
```

## Quick Start

### Creating The ThetaHttpProvider

```typescript
const provider = new ThetaHttpProvider('https://theta-bridge-rpc.thetatoken.org/rpc') //support use your own rpc url

```
#### getBlockByHeight

```typescript
const blockInfo = await provider.getBlockByHeight('11828300')
```
Response:
```typescript
interface THETA_BLOCK_INTERFACE {
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

```

#### getVcpByHeight

```typescript
  const blockInfo = await provider.getVcpByHeight('11828300')
```
Response:
```typescript
interface THETA_VCP_INTERFACE {
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
```

#### getGcpByHeight

```typescript
 const blockInfo = await provider.getGcpByHeight('11828300')
```
Response:
```typescript
interface THETA_GCP_INTERFACE {
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
```

#### getEenpByHeight

```typescript
const blockInfo = await provider.getEenpByHeight('11828300')
```
Response:
```typescript
interface THETA_EENP_INTERFACE {
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
```
#### getStatus

```typescript
  const blockInfo = await provider.getStatus()
```
Response:
```typescript
interface THETA_NODE_STATUS {
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
```

### Creating The CmcHttpProvider

this will provide price related information from coinmarketcap

```typescript
const provider = new CmcHttpProvider('your-own-key')

```

#### getInformation

````typescript
const res = await provider.getInformation()
````
Response:
```typescript
interface CMC_PRICE_INFORMATION {
  name: string
  price: number
  volume_24h: number
  market_cap: number
  total_supply: number
  circulating_supply: number
  last_updated: string
}

```

[![NPM](https://nodei.co/npm/theta-ts-sdk.png)](https://nodei.co/npm/theta-ts-sdk/)