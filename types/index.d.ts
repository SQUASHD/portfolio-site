import { Icon, Icons } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  anchor?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
};

// Swap out for docsConfig, marketingConfig etc.

export type LayoutConfig = {
  mainNav: MainNavItem[];
  sidebarNav?: SidebarNavItem[];
};

export type ProjectLink = {
  href: string;
  label: string;
  icon: Icon;
};

export type Project = {
  title: string;
  descriptiveLabel: string;
  description: string;
  icon: Icon;
  links?: {
    github?: {
      href: string;
      label: "Se mer på GitHub";
      icon: Icons.github;
    };
    external?: {
      href: string;
      label: string;
      icon: Icons.link;
    };
    internal?: {
      href: string;
      label: string;
      icon: Icons.link;
    };
    readMore?: {
      href: string;
      label: "Les mer om prosjektet";
      icon: Icons.book;
    };
  };
};
