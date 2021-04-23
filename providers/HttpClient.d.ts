import { THETA_METHOD_ENUM } from '../types/enum';
export declare class HttpClient {
    private url;
    private nextId;
    constructor(url: string);
    send(method: THETA_METHOD_ENUM, params: any): Promise<any>;
}
