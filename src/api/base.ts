import { Platform, GameMode, PlayerObject } from '../models';
export class APIHelper {
  private _apiKey: string;
  private _platform: Platform;
  constructor(apiKey: string, platform: Platform) {
    this._apiKey = apiKey;
    this._platform = platform;
  }
  public baseRequest<T>(params: string): Promise<T> {
    return fetch(`https://api.playbattlegrounds.com/shards/${this._platform}/${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this._apiKey}`,
        Accept: 'application/vnd.api+json',
      },
    }).then(response => response.json());
  }
  public playerInfo(playerName: string): Promise<PlayerObject> {
    return this.baseRequest<PlayerObject>(`players?filter[playerNames]=${playerName}`);
  }
  public matchInfo(matchID: string): object {
    return this.baseRequest(`matches/${matchID}`);
  }
  public allSeasons(): object {
    return this.baseRequest('seasons');
  }
  public seasonStats(playerID: string, seasonID: string): object {
    return this.baseRequest(`players/${playerID}/seasons/${seasonID}`);
  }
  public seasonStatsWithGameMode(playerID: string, seasonID: string, gameMode: GameMode) {
    return this.baseRequest(`players/seasons/${seasonID}/gameMode/${gameMode}/players?filter[playerIds]=${playerID}`);
  }
  public lifeTimeStats(playerID: string): object {
    return this.baseRequest(`players/${playerID}/seasons/lifetime`);
  }
  public lifeTimeStatsWithGameMode(playerID: string, gameMode: GameMode) {
    return this.baseRequest(`seasons/lifetime/gameMode/${gameMode}/players?filter[playerIds]=${playerID}`);
  }
  public weaponMastery(playerID: string): object {
    return this.baseRequest(`players/${playerID}/weapon_mastery`);
  }
}
