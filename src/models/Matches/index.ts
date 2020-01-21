import { Asset } from './Asset';
import { Match } from './Match';
import { Participant } from './Participant';
import { Roster } from './Roster';

interface Links {
  self: string;
}

export interface IMatch {
  data: Match;
  included: Array<Asset | Participant | Roster>;
  links: Links;
  meta: object;
}
