import { THETA_TRANSACTION_TYPE_ENUM } from './enum'

export interface THETA_COIN_INTERFACE {
  thetaWei: number
  tfuelWei: number
}

export interface THETA_SEND_TX_INTERFACE {
  senderAddr: string
  outputs: Array<THETA_COIN_INTERFACE>
  feeInTFuelWei: number
  senderSequence: number
}

export interface THETA_SMART_CONTRACT_INTERFACE {
  type: THETA_TRANSACTION_TYPE_ENUM.smart_contract
  fromAddress: string
  toAddress: string
  gasLimit: number
  gasPrice: number
  data: string
  value: string
  senderSequence: number
}
