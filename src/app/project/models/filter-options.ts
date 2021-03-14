import { Tag } from './tag';

export class FilterOptions {
  tags: {
    enabled: boolean;
    tag: Tag;
  }[];
}
