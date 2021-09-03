import { CmcHttpProvider } from '../src/providers/CmcHttpProvider'

const provide = new CmcHttpProvider('57a40db8-5488-4ed4-ab75-152fec2ed608')
test('get price infomation from cmc', async () => {
  let res = await provide.getInformation()
  expect(res.theta.price).toBeGreaterThan(1)
  expect(res.tfuel.price).toBeGreaterThan(0.1)
})
