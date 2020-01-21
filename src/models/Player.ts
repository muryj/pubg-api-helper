interface Attributes {
  name: string;
  shardId: string;
  stats: boolean | object;
  createdAt: string;
  updatedAt: string;
  patchVersion: string;
  titleId: string;
}
interface typeVariant<T> {
  data: T;
}
interface MatchList {
  id: string;
  type: string;
}
interface Relationships {
  assets: typeVariant<object>;
  matches: typeVariant<MatchList[]>;
}
interface Links {
  schema: string;
  self: string;
}

export interface PlayerObject {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: Links;
}
