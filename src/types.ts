export type Metadata = {
  cid?: string;
  filename?: string;
  profilePicture?: string;
};

export type Link = {
  id: string;
  title: string;
  url: string;
};

export type Settings = {
  profileTitle: string;
  profilePicture?: string;
  theme?: string;
};

export type ExportData = {
  settings: Settings;
  links: Array<Link>;
};

export type ThemeStyleSheet = any;

export type ThemeButtonStyleSheet = ThemeStyleSheet & {};

export type ThemeConfig = {
  name: string;
  defaults: ThemeStyleSheet;
  container: ThemeStyleSheet;
  title: ThemeStyleSheet;
  buttons: ThemeStyleSheet;
};
