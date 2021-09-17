import { thetaTsSdk } from '../src'

// const provider = new ThetaHttpProvider('https://theta-bridge-rpc.thetatoken.org/rpc')
let height = '11033205'
// const blockInfo = await thetaTsSdk.blockchain.getStatus()

test('should get status', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getStatus()
  expect(blockInfo).toHaveProperty('result.latest_finalized_block_height')
  height = blockInfo.result.latest_finalized_block_height
})

test('should get block by height', async () => {
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

test('should get version', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getVersion()
  expect(blockInfo).toHaveProperty('result.version')
})

test('should get account', async () => {
  const accountInfo = await thetaTsSdk.blockchain.getAccount(
    '0x4c1cd366820f6f87301451ec9601c8002273a2f0'
  )
  expect(accountInfo).toHaveProperty('result.coins')
  expect(accountInfo).toHaveProperty('result.reserved_funds')
})

test('should get block', async () => {
  const blockInfo = await thetaTsSdk.blockchain.getBlock(
    '0xe85a5a914f8c3772067d14f431e062aacbd7d12d3590ec8ab236422b883afc36'
  )
  expect(blockInfo).toHaveProperty('result.transactions_hash')
})

test('should get transaction', async () => {
  const transInfo = await thetaTsSdk.blockchain.getTransaction(
    '0xeb6bf2599e49f01f6de18076d9fb90595536a47f5789d2632e66c636acb93900'
  )
  expect(transInfo).toHaveProperty('result.transaction')
})
