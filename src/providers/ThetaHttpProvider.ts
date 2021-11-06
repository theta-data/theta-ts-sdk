import { HttpClient } from './HttpClient'
import { THETA_METHOD_ENUM } from '../types/enum'
import {
  THETA_BLOCK_INTERFACE,
  THETA_EENP_INTERFACE,
  THETA_GCP_INTERFACE,
  THETA_GET_ACCOUNT_INTERFACE,
  THETA_GET_PENDING_TRANSACTIONS_INTERFACE,
  THETA_GET_STAKE_REWARD_DISTRIBUTION_BY_HEIGHT_INTERFACE,
  THETA_GET_VERSION_INTERFACE,
  THETA_NODE_STATUS,
  THETA_TRANSACTION_INTERFACE,
  THETA_VCP_INTERFACE
} from '../types/interface'

export class ThetaHttpProvider {
  httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://theta-bridge-rpc.thetatoken.org/rpc')
  }

  setUrl(url: string) {
    this.httpClient = new HttpClient(url)
  }

  async getBlockByHeight(blockHeight: string): Promise<THETA_BLOCK_INTERFACE> {
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

  async getBlock(hash: string): Promise<THETA_BLOCK_INTERFACE> {
    return await this.httpClient.send(THETA_METHOD_ENUM.GetBlock, { hash: hash })
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
}
