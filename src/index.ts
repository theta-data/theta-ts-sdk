import { THETA_TS_SDK } from './types/interface'
import { ThetaHttpProvider } from './providers/ThetaHttpProvider'
import { CmcHttpProvider } from './providers/CmcHttpProvider'

// export { ThetaHttpProvider } from './providers/ThetaHttpProvider'
// export { CmcHttpProvider } from './providers/CmcHttpProvider'
// export {THETA_TRANSACTION_TYPE_ENUM} from './types/enum'
// module.exports.ThetaHttpProvider = ThetaHttpProvider

export const thetaTsSdk: THETA_TS_SDK = {
  blockchain: new ThetaHttpProvider(),
  cmc: new CmcHttpProvider()
}
