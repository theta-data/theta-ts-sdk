import { HttpClient } from './HttpClient'
import { THETA_METHOD_ENUM, THETA_TRANSACTION_TYPE_ENUM } from '../types/enum'
import {
  THETA_BLOCK_INTERFACE,
  THETA_CALL_SMART_CONTRACT_INTERFACE,
  THETA_EENP_INTERFACE,
  THETA_GCP_INTERFACE,
  THETA_GET_ACCOUNT_INTERFACE,
  THETA_GET_BLOCK_INTERFACE,
  THETA_GET_PENDING_TRANSACTIONS_INTERFACE,
  THETA_GET_STAKE_REWARD_DISTRIBUTION_BY_HEIGHT_INTERFACE,
  THETA_GET_VERSION_INTERFACE,
  THETA_NODE_STATUS,
  THETA_TRANSACTION_INTERFACE,
  THETA_VCP_INTERFACE
} from '../types/interface'
import { TransactionProvider } from './TransactionProvider'

export class ThetaHttpProvider {
  httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://theta-bridge-rpc.thetatoken.org/rpc')
  }

  setUrl(url: string) {
    this.httpClient = new HttpClient(url)
  }

  async getBlockByHeight(blockHeight: string): Promise<THETA_GET_BLOCK_INTERFACE> {
    const params = { height: blockHeight }
    return await this.httpClient.send(THETA_METHOD_ENUM.GetBlockByHeight, params)
  }

  async getVcpByHeight(blockHeight: string): Promise<THETA_VCP_INTERFACE> {
    const params = { height: blockHeight }
    return await this.httpClient.send(THETA_METHOD_ENUM.GetVcpByHeight, params)
  }

  async getGcpByHeight(blockHeight: string): Promise<THETA_GCP_INTERFACE> {
    const params = { height: blockHeight }
    return await this.httpClient.send(THETA_METHOD_ENUM.GetGcpByHeight, params)
  }

  async getEenpByHeight(blockHeight: string): Promise<THETA_EENP_INTERFACE> {
    const params = { height: blockHeight }
    return await this.httpClient.send(THETA_METHOD_ENUM.GetEenpByHeight, params)
  }

  async getStatus(): Promise<THETA_NODE_STATUS> {
    const params = {}
    return await this.httpClient.send(THETA_METHOD_ENUM.GetStatus, params)
  }

  async getVersion(): Promise<THETA_GET_VERSION_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetVersion, {})
  }

  async getAccount(address: string): Promise<THETA_GET_ACCOUNT_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetAccount, { address: address })
  }

  async getBlock(hash: string): Promise<THETA_GET_BLOCK_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetBlock, { hash: hash })
  }

  async getBlockSByRange(
    start: string,
    end: string,
    includeEthTxHashes: boolean = false
  ): Promise<THETA_GET_BLOCK_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetBlocksByRange, {
      start: start,
      end: end,
      include_eth_tx_hashes: includeEthTxHashes
    })
  }

  async getTransaction(hash: string): Promise<THETA_TRANSACTION_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetTransaction, { hash: hash })
  }

  async getPendingTransactions(): Promise<THETA_GET_PENDING_TRANSACTIONS_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetPendingTransactions, {})
  }

  async getStakeRewardDistributionByHeight(
    blockHeight: string
  ): Promise<THETA_GET_STAKE_REWARD_DISTRIBUTION_BY_HEIGHT_INTERFACE> {
    const params = { height: blockHeight }
    return await this.httpClient.send(THETA_METHOD_ENUM.GetStakeRewardDistributionByHeight, params)
  }

  async callSmartContract(
    from: string,
    to: string,
    data: string
  ): Promise<THETA_CALL_SMART_CONTRACT_INTERFACE> {
    const gasPrice = 0.000001
    const gasLimit = 2000000
    const senderSequence = 1
    const txProcesser = new TransactionProvider()
    if (data.toLowerCase().startsWith('0x') === false) {
      data = '0x' + data
    }
    console.log('call smart contract data', data)
    const rawTxBytes = txProcesser.serializeTx({
      type: THETA_TRANSACTION_TYPE_ENUM.smart_contract,
      fromAddress: from,
      toAddress: to,
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      data: data,
      value: 0,
      senderSequence: senderSequence
    })
    const sctxBytes: string = rawTxBytes.toString('hex').slice(2)
    const params = { sctx_bytes: sctxBytes }
    return await this.httpClient.send(THETA_METHOD_ENUM.CallSmartContract, params)
  }
}
