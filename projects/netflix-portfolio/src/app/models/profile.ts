export interface Profile {
  guid: string;
  name: string;
  layoutsGuids: string[];
  thumbnailPath: string;
  hidden?: boolean;
}
