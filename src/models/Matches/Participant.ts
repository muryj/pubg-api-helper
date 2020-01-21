enum DeathType {
  ALIVE = 'alive',
  BYPLAYER = 'byplayer',
  BYZONE = 'byzone',
  SUICIDE = 'suicide',
  LOGOUT = 'logout',
}
interface Stats {
  DBNOs: number;
  assists: number;
  boosts: number;
  damageDealt: number;
  deathType: DeathType;
  headshotKills: number;
  heals: number;
  killPlace: number;
  killStreaks: number;
  kills: number;
  longestKill: number;
  name: string;
  playerId: string;
  revives: number;
  rideDistance: number;
  roadKills: number;
  swimDistance: number;
  teamKills: number;
  timeSurvived: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;
  winPlace: number;
}

interface Attributes {
  actor: string;
  shardId: string;
  stats: Stats;
}

export interface Participant {
  type: string;
  id: string;
  attributes: Attributes;
}
