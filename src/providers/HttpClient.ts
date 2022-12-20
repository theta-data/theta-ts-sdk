import { THETA_METHOD_ENUM } from '../types/enum'
// import axios from 'axios'
const axios = require('axios')
// import fetch from 'cross-fetch'
// const axios = require('axios')
export class HttpClient {
  private url: string
  private nextId: number = 0
  constructor(url: string) {
    this.url = url
  }

  RandomIdGenerator() {
    let id = ''
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let length = 8
    for (let i = 0; i < length; i++)
      id += charSet.charAt(Math.floor(Math.random() * charSet.length))
    return id
  }

  public async send(method: THETA_METHOD_ENUM, params: any, timeout: number = 10000) {
    const requestBody = {
      jsonrpc: '2.0',
      id: this.RandomIdGenerator(),
      method: method,
      params: params
    }
    try {
      // const res = await fetch(this.url, {
      //   method: 'POST',
      //   body: JSON.stringify(requestBody),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })
      const res = await axios({
        url: this.url,
        method: 'POST',
        data: requestBody,
        timeout: timeout,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      // return await res.json();
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }
}
