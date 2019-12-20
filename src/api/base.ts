import { Platform } from '../models';

export class APIHelper {
  private _apiKey: string;
  private _platform: Platform;
  constructor(apiKey: string, platform: Platform) {
    this._apiKey = apiKey;
    this._platform = platform;
  }
  public baseRequest(params: string) {
    return fetch(`https://api.playbattlegrounds.com/shards/${this._platform}/${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this._apiKey}`,
        Accept: 'application/vnd.api+json',
      },
    });
  }
  public playerByName(playerName: string): object {
    return this.baseRequest(`players?filter[playerNames]=${playerName}`);
  }
  public playerMatchesByID(playerID: string): object {
    return this.baseRequest(`matches/${playerID}`);
  }
  public playerLifeTimeStats(playerID: string): object {
    return this.baseRequest(`players/${playerID}/seasons/lifetime`);
  }
}
