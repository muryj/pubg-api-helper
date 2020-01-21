interface PlayerAttributes {
  name: string;
  shardId: string;
  stats: boolean | object;
  createdAt: string;
  updatedAt: string;
  patchVersion: string;
  titleId: string;
}

interface Relationships {
  assets: Assets;
  matches: Matches;
}

interface Assets {}

interface Matches {}

export interface PlayerObject {
  type: string;
  id: string;
  attributes: PlayerAttributes;
  relationships: Relationships;
}
