export interface SocialNetwork {
  network: string;
  link: string;
}

export interface ExtraResource {
  resource: string | undefined;
  link: string;
  resourceType: string;
}

export interface KPI {
  kpi: number;
  label: string;
}

export interface BorrowerProfile {
  companyName: string;
  description: any;
  logo: string;
  socialNetworks: SocialNetwork[];
  extraResources: ExtraResource[];
  kpis: KPI[];
  url: string;
  urlText: string;
  updated: string;
  address: string;
}
