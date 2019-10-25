export interface SocialNetwork {
  network: any;
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

export interface BorrowerDetails {
  companyName: string;
  description: any;
  logo: string;
  url: string;
  urlText: string;
  updated: string;
  address: string;
  userId: string;
  account: string;
  foundationDate: string;
}

export interface BorrowerProfile {
  companyDetails: BorrowerDetails;
  kpis: KPI[];
  socialNetworks: SocialNetwork[];
  extraResources: ExtraResource[];
}
