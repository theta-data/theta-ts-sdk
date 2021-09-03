import { CmcHttpProvider } from '../src/providers/CmcHttpProvider'

const provider = new CmcHttpProvider('57a40db8-5488-4ed4-ab75-152fec2ed608')
test('get price infomation from cmc', async () => {
  const res = await provider.getInformation()
  expect(res.theta.price).toBeGreaterThan(1)
  expect(res.tfuel.price).toBeGreaterThan(0.1)
})
