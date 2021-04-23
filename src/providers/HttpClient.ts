import { THETA_METHOD_ENUM } from '../types/enum'
import fetch from 'cross-fetch';

export class HttpClient{
  private url : string
  private nextId : number = 0
  constructor(url : string) {
    this.url = url
  }

  public async send(method : THETA_METHOD_ENUM,params:any){
    const requestBody = {
      jsonrpc: "2.0",
      id: (this.nextId++),
      method: method,
      params: params,
    };
    try {
      const res = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return await res.json();
    } catch (err) {
      throw new Error(err)
    }
  }
}