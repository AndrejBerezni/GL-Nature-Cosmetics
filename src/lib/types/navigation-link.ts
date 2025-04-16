export interface INavigationLink {
  href: string;
  text: string;
}

export interface INavigationLinkWithIcon extends INavigationLink {
  icon: React.ReactNode;
}

export interface IFooterColumn {
  title: string;
  links: INavigationLink[];
}
