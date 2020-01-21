import { Match } from './Match';
import { Asset } from './Asset';
import { Participant } from './Participant';
import { Roster } from './Roster';

interface Links {
  self: string;
}

export interface Matches {
  data: Match;
  included: (Asset | Participant | Roster)[];
  links: Links;
  meta: object;
}
