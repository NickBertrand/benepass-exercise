type CardTypes = 'virtual' | 'physical'

export type CardProcessors = 'Visa' | 'MasterCard' | 'American Express' | 'Discover';

export interface CardDetails {
  ccNumber: string;
  cvc: string;
  expiration: string;
  zip: string;
  cardType: CardTypes;
  cardProcessor: CardProcessors;
}

export interface CardProps {
  cardDetails: CardDetails;
  cardLogo: string;
  showDetails: boolean;
}

