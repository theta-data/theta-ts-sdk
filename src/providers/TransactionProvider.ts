import { THETA_SMART_CONTRACT_INTERFACE } from '../types/transaction-interface'
import isString from 'lodash/isString'
import isNumber from 'lodash/isNumber'
import BigNumber from 'bignumber.js'
import { THETA_TRANSACTION_TYPE_ENUM } from '../types/enum'
const Bytes = require('eth-lib/lib/bytes')
const RLP = require('eth-lib/lib/rlp')
const Hash = require('eth-lib/lib/hash')
const encodeWei = (wei) => {
  if (wei === null || wei === undefined) {
    return Bytes.fromNat('0x0')
  } else if (wei.isEqualTo(new BigNumber(0))) {
    return Bytes.fromNat('0x0')
  } else {
    return Bytes.fromNumber(wei)
  }
}
export class TransactionProvider {
  constructor() {}
  signAndSerializeTx() {}
  serializeTx(tx: THETA_SMART_CONTRACT_INTERFACE) {
    let encodedTxType = RLP.encode(Bytes.fromNumber(tx.type))
    let rplInput: Array<any> = []
    switch (tx.type) {
      case THETA_TRANSACTION_TYPE_ENUM.smart_contract:
        const valueWeiBN = BigNumber.isBigNumber(tx.value) ? tx.value : new BigNumber(tx.value)

        const from = new TxInput(tx.fromAddress, null, valueWeiBN, tx.senderSequence)
        rplInput.push(from.rlpInput())
        const to = new TxOutput(tx.toAddress, null, null)
        rplInput.push(to.rlpInput())
        rplInput.push(Bytes.fromNumber(tx.gasLimit))
        rplInput.push(this.encodeWei(tx.gasPrice))
        rplInput.push(Bytes.fromArray(tx.data))
        break
      default:
        break
    }
    let encodedTx = RLP.encode(rplInput) // this time encode with signature
    let signedRawBytes = encodedTxType + encodedTx.slice(2)
    return signedRawBytes
  }
  signTx() {}

  encodeWei(wei) {
    if (wei === null || wei === undefined) {
      return Bytes.fromNat('0x0')
    } else if (wei.isEqualTo(new BigNumber(0))) {
      return Bytes.fromNat('0x0')
    } else {
      return Bytes.fromNumber(wei)
    }
  }
}

class TxInput {
  address: string
  sequence: number
  signature: string
  coins: Coins
  constructor(address, thetaWei, tfuelWei, sequence) {
    this.address = address
    this.sequence = sequence
    this.signature = ''

    if (thetaWei || tfuelWei) {
      this.coins = new Coins(thetaWei, tfuelWei)
    } else {
      //TODO should this be undefined or null?
      this.coins = new Coins(null, null)
    }
  }

  setSignature(signature) {
    this.signature = signature
  }

  rlpInput() {
    let address = null

    if (this.address) {
      address = this.address.toLowerCase()
    } else {
      address = Bytes.fromNat('0x0')
    }

    let rplInput = [address, this.coins.rlpInput(), Bytes.fromNumber(this.sequence), this.signature]

    return rplInput
  }
}

class TxOutput {
  address: string
  coins: Coins
  constructor(address, thetaWei, tfuelWei) {
    this.address = address

    if (thetaWei || tfuelWei) {
      this.coins = new Coins(thetaWei, tfuelWei)
    } else {
      //TODO should this be undefined or null?
      this.coins = new Coins(null, null)
    }
  }

  rlpInput() {
    let address = null

    if (this.address) {
      address = this.address.toLowerCase()
    } else {
      //Empty address
      address = '0x0000000000000000000000000000000000000000'
    }

    let rplInput = [address, this.coins.rlpInput()]

    return rplInput
  }
}

class Coins {
  thetaWei: number
  tfuelWei: number
  constructor(thetaWei, tfuelWei) {
    this.thetaWei = thetaWei
    this.tfuelWei = tfuelWei
  }

  rlpInput() {
    let rlpInput = [
      encodeWei(this.thetaWei),
      encodeWei(this.tfuelWei)
      //(this.thetaWei.isEqualTo(new BigNumber(0))) ? Bytes.fromNat("0x0") : Bytes.fromNumber(this.thetaWei),
      //(this.tfuelWei.isEqualTo(new BigNumber(0))) ? Bytes.fromNat("0x0") : Bytes.fromNumber(this.tfuelWei)
    ]

    return rlpInput
  }
}
