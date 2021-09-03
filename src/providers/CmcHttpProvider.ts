import fetch from 'cross-fetch'
import { CMC_PRICE_INFORMATION } from '../types/interface'

export class CmcHttpProvider {
  key: string
  url: string = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
  constructor(key: string) {
    this.key = key
  }

  async getInformation(): Promise<{ tfuel: CMC_PRICE_INFORMATION; theta: CMC_PRICE_INFORMATION }> {
    const requestBody = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
      qs: {
        id: '2416,3822'
      },
      headers: {
        'X-CMC_PRO_API_KEY': this.key
      },
      json: true,
      gzip: true
    }
    try {
      const res = await fetch(this.url + '?id=2416,3822', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-CMC_PRO_API_KEY': this.key
        }
      })
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      let jsonInfo = (await res.json()).data
      return {
        theta: {
          name: jsonInfo['2416']['name'],
          price: jsonInfo['2416']['quote']['USD']['price'],
          volume_24h: jsonInfo['2416']['quote']['USD']['volume_24h'],
          market_cap: jsonInfo['2416']['quote']['USD']['market_cap'],
          total_supply: jsonInfo['2416']['total_supply'],
          circulating_supply: jsonInfo['2416']['circulating_supply'],
          last_updated: jsonInfo['2416']['last_updated']
        },
        tfuel: {
          name: jsonInfo['3822']['name'],
          price: jsonInfo['3822']['quote']['USD']['price'],
          volume_24h: jsonInfo['3822']['quote']['USD']['volume_24h'],
          market_cap: jsonInfo['3822']['quote']['USD']['market_cap'],
          total_supply: jsonInfo['3822']['total_supply'],
          circulating_supply: jsonInfo['3822']['circulating_supply'],
          last_updated: jsonInfo['3822']['last_updated']
        }
      }
      // res.json()
    } catch (err) {
      throw new Error(err)
    }
  }
}
