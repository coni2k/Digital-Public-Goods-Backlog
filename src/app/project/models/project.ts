import { Tag } from './tag';

export interface Project {
  content: string;
  favorite: boolean;
  projectId: number;
  summary: string;
  tags: Tag[];
  title: string;
}
