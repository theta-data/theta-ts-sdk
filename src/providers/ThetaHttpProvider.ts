import { HttpClient } from './HttpClient'
import { THETA_METHOD_ENUM } from '../types/enum'
import {
  THETA_BLOCK_INTERFACE,
  THETA_EENP_INTERFACE,
  THETA_GCP_INTERFACE,
  THETA_NODE_STATUS,
  THETA_VCP_INTERFACE
} from '../types/interface'

export class ThetaHttpProvider {
  httpClient: HttpClient

  constructor(url: string) {
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
}
