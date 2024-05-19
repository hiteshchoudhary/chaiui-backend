import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'bulletList';
  };
  attributes: {
    nav_links: Attribute.Component<'layout.nav-links', true>;
    copyright_text: Attribute.String;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
    nav_links: Attribute.Component<'layout.nav-links', true>;
  };
}

export interface LayoutNavLinks extends Schema.Component {
  collectionName: 'components_layout_nav_links';
  info: {
    displayName: 'Nav Links';
    icon: 'hashtag';
  };
  attributes: {
    label: Attribute.String;
    endpoint: Attribute.String;
  };
}

export interface LayoutSeo extends Schema.Component {
  collectionName: 'components_layout_seos';
  info: {
    displayName: 'SEO';
    icon: 'arrowUp';
  };
  attributes: {
    seo_metadata: Attribute.JSON;
    seo_title: Attribute.String;
    seo_description: Attribute.String;
    og_image: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.nav-links': LayoutNavLinks;
      'layout.seo': LayoutSeo;
    }
  }
}
