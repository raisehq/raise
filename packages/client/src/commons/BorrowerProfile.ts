export interface SocialNetwork {
  network: string;
  link: string;
}

export interface ExtraResources {
  resource: string;
  link: string;
}

export interface BorrowerProfile {
  companyName: string;
  description: any;
  logo: string;
  socialNetworks: SocialNetwork[];
  extraResources: ExtraResources[];
  kpi1: number;
  kpi2: number;
  url: string;
}
