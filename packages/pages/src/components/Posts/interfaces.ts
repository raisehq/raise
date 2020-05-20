export interface Author {
  first_name?: string;
  last_name?: string;
}

interface KeyValue {
  [key: string]: string;
}

export interface Post {
  featured_image?: string;
  featured_image_alt?: string;
  meta_description?: string;
  seo_title?: string;
  author?: Author;
  date?: string;
  tags?: KeyValue[];
  title: string;
  summary: string;
  created: string;
  slug: string;
  body: string;
}

export interface Node {
  node: Post;
}

export interface Image {
  src: string;
}
