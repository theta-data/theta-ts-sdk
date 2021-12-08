[![NPM](https://nodei.co/npm/theta-ts-sdk.png)](https://nodei.co/npm/theta-ts-sdk/)   

Theta-ts-sdk is the typescript version sdk for [The Theta Network](https://www.thetatoken.org/)

## Features

* query block information from theta rpc interface
* supports customize the rpc url
* query price information from cmc

## Installation

```bash
npm install theta-ts-sdk --save
```

## Quick Start
### blockchain
#### getBlockByHeight

```typescript
const blockInfo = await thetaTsSdk.blockchain.getBlockByHeight('12812680')
```
Response:
```json
{
  "result": {
    "chain_id": "mainnet",
    "children": [
      "0x232ee6c1901c6ddd960aacded97268664b2d83d034f1a828585948f71314b757"
    ],
    "epoch": "12895514",
    "hash": "0x4af27e43da47a7398fe904967f002268e14d48f6e226a15f0333997aaa37ce7b",
    "height": "12812680",
    "parent": "0x1d6721f1e2d88bf5c8c89a6ee00d96d5b0b065706a4d60d3972ba0a27d1c16ef",
    "proposer": "0xcbcef62ca7a2e367a9c93aba07ea4e63139da99d",
    "state_hash": "0x63fb02fa46694160c31485628da6d7830db438817f402d817ad661c4e2617f98",
    "status": "directly_finalized",
    "timestamp": "1636722729",
    "transactions_hash": "0x6166e704b2cf37e4c85faa9ed00a176161c8fc835b1c9b812f58266c2c961b24",
    "transactions": [
      {
        "type": "TxCoinbase",
        "hash": "0x16df2d1fd50fe2bbe3c0ff0b15bdd69dd0ddb3e4bb751d9772e38e8cb3440c76"
      },
      {
        "type": "TxSmartContract",
        "hash": "0x37670692b97a9fb5ff018b5e9f38f6e793078bfe38565c9ec1b064bde13f6db4"
      },
      {
        "type": "TxSmartContract",
        "hash": "0xb592df01962244c7e31a5a3d40976340b9705bf3e61f5d3623df634396e55a3e"
      }
    ]
  }
}
```

#### getVcpByHeight

```typescript
  const blockInfo = await thetaTsSdk.blockchain.getVcpByHeight('11828300')
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
 const blockInfo = await thetaTsSdk.blockchain.getGcpByHeight('11828300')
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
const blockInfo = await thetaTsSdk.blockchain.getEenpByHeight('11828300')
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
  const blockInfo = await thetaTsSdk.blockchain.getStatus()
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

this will provide price related information from  [CoinMarketCap Website](https://coinmarketcap.com).  

you should get your own api key from [CoinMarketCap API](https://coinmarketcap.com/api/).   

set your own key
```typescript
thetaTsSdk.cmc.setKey('set-your-own key')

```

#### getInformation

````typescript
const res = await thetaTsSdk.cmc.getInformation()
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