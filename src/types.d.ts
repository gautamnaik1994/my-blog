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
  title?: string = '';
  slug?: string = '';
  date?: string = '';
  description?: string = '';
  keywords?: string[] = [];
  categories?: string[] | any = [];
  banner?: { childImageSharp: { sizes: any } };
}

export interface Mdx {
  edges: [];
  code: { body: string };
  frontmatter: Frontmatter;
}

export interface LayoutProps {
  site: Site;
  frontmatter?: Frontmatter;
  children: {};
}

export interface PageContext {
  next: { fields: { title: string; slug: string } };
  prev: { fields: { title: string; slug: string } };
}
