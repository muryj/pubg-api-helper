enum GameMode {
  DUO = 'duo',
  DUO_FPP = 'duo-fpp',
  SOLO = 'solo',
  SOLO_FPP = 'solo-fpp',
  SQUAD = 'squad',
  SQUAD_FPP = 'squad-fpp',
}
enum MapName {
  DESERT_MAIN = 'Desert_Main',
  ERANGEL_MAIN = 'Erangel_Main',
  SAVAGE_MAIN = 'Savage_Main',
  RANGE_MAIN = 'Range_Main',
  DIHOROTOK_MAIN = 'DihorOtok_Main',
  BALTIC_MAIN = 'Baltic_Main',
}
enum Season {
  CLOSED = 'closed',
  PREPARE = 'prepare',
  PROGRESS = 'progress',
}
interface Attributes {
  createdAt: string;
  duration: number;
  gameMode: GameMode;
  mapName: MapName;
  isCustomMatch: boolean;
  patchVersion: string;
  seasonState: Season;
  shardId: string;
  stats: object;
  tags: object;
  titleId: string;
}
interface TypeVariant {
  type: string;
  id: string;
}
interface Rosters {
  data: TypeVariant[];
}
interface Assets {
  data: TypeVariant[];
}
interface Relationships {
  assets: Assets;
  rosters: Rosters;
  rounds: object;
  spectators: object;
}
interface Links {
  schema: string;
  self: string;
}
export interface Match {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: Links;
}
