interface Attributes {
  createdAt: string;
  duration: number;
  gameMode: string;
  mapName: string;
  isCustomMatch: boolean;
  patchVersion: string;
  seasonState: string;
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
