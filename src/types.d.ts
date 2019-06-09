export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  keywords: string[];
}

export interface Site {
  siteMetadata: SiteMetadata;
}

export interface Frontmatter {
  title: string;
  slug: string;
  date: string;
  description: string;
  keywords: string[];
}
