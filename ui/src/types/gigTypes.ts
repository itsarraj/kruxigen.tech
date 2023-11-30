// Interfaces for Gig Data
export interface GigData {
  gigId: number;
  topLine: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  headline: string;
  description: string;
  details: string[];
  buttonLabel: string;
  externalLink: boolean;
  img: string;
  alt: string;
  imgStart: boolean;
  start: boolean;
  gigUrl: string;
  introduction?: string;
}

// Interfaces for Gig Pricing
export interface PackageDetails {
  id: number;
  package: string;
  price: string;
  gigName: string;
  description: string;
  details: string[];
  gigUrl: string;
}

export interface GigPricing {
  gigId: number;
  title: string;
  packages: {
    basic: PackageDetails;
    standard: PackageDetails;
    premium: PackageDetails;
  };
}
