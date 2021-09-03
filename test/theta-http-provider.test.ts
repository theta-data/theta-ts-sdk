import { thetaTsSdk } from '../src'

// const provider = new ThetaHttpProvider('https://theta-bridge-rpc.thetatoken.org/rpc')
const height = '11828300'
test('should get block height', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getBlockByHeight(height)
  expect(blockInfo).toHaveProperty('result.transactions_hash')
})

test('should get vcp by height', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getVcpByHeight(height)
  expect(blockInfo).toHaveProperty('result.BlockHashVcpPairs')
})

test('should get gcp by height', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getGcpByHeight(height)

  expect(blockInfo).toHaveProperty('result.BlockHashGcpPairs')
})

test('should get eenp by height', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getEenpByHeight(height)
  expect(blockInfo).toHaveProperty('result.BlockHashEenpPairs')
})

test('should get status', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getStatus()
  expect(blockInfo).toHaveProperty('result.latest_finalized_block_height')
})
