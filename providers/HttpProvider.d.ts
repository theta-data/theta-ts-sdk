import { HttpClient } from './HttpClient';
export declare class ThetaHttpProvider {
    httpClient: HttpClient;
    constructor(url: string);
    getBlockByHeight(blockHeight: number): Promise<any>;
}
