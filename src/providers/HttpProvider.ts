import { HttpClient } from './HttpClient'
import { THETA_METHOD_ENUM } from '../types/enum'
import { THETA_BLOCK_INTERFACE } from '../types/interface'

export class ThetaHttpProvider{
    httpClient : HttpClient
    constructor(url : string) {
        this.httpClient = new HttpClient(url)
    }
    async getBlockByHeight(blockHeight : string):Promise<THETA_BLOCK_INTERFACE> {
        const params = { height: blockHeight };
        return await this.httpClient.send(THETA_METHOD_ENUM.GetBlockByHeight, params);
    }
}