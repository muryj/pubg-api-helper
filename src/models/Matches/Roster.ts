interface Stats {
  rank: number;
  team: number;
}
interface Attributes {
  shardId: string;
  stats: Stats;
  won: string;
}
interface Participant {
  type: string;
  id: string;
}
interface Participants {
  data: Participant[];
}
interface Relationships {
  participants: Participants;
  team: object;
}

export interface Roster {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
}
