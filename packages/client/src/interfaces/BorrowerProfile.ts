export interface SocialNetwork {
  network: any;
  link: string;
}

export interface ExtraResource {
  resource: string | undefined;
  link: string;
  resource_type: string;
  resourceType: string;
}

export interface KPI {
  kpi: number;
  label: string;
  tooltip: string;
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
  ethereumAddress: string;
  foundationDate: string;
  background: string;
}

export interface Member {
  name: string;
  profileUrl?: string;
  image: string;
  role: string;
  profileUrlIcon?: string;
}

export interface BorrowerProfile {
  companyDetails: BorrowerDetails;
  kpis: KPI[];
  socialNetworks: SocialNetwork[];
  extraResources: ExtraResource[];
  members: Member[];
}
