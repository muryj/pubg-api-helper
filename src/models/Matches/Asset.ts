interface Attributes {
  URL: string;
  createdAt: string;
  description: string;
  name: string;
}
export interface Asset {
  type: string;
  id: string;
  attributes: Attributes;
}
