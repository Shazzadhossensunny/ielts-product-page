export interface Medium {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Seo {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Instructor {
  name: string;
  description: string;
  image: string;
  short_description: string;
  slug: string;
  has_instructor_page: boolean;
}

export interface Feature {
  icon: string;
  id: string;
  title: string;
  subtitle: string;
}

export interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface AboutItem {
  title: string;
  description: string;
  icon: string;
  id: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export interface Price {
  currency: string;
  discount_price: number;
  is_discounted: boolean;
  original_price: number;
}

export interface ProductFaq {
  id: string;
  question: string;
  answer: string;
  order_idx: number;
  page_visibility: boolean;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo[];
  cta_text: CtaText;
  sections: Section[];
  instructors: Instructor[];
  features: Feature[];
  pointers: Pointer[];
  about_items: AboutItem[];
  product_faqs: ProductFaq[];
  price: Price;
}

export interface ApiResponse {
  code: number;
  data: Data;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}
