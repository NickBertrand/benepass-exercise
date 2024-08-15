import { CardProcessors } from '../components/Card/CardInterface';
import VisaLogo from '../img/VisaLogo.svg';
import MasterCardLogo from '../img/BenepassLogo.svg';
import AMEXLogo from '../img/BenepassLogo.svg';
import DiscoverLogo from '../img/BenepassLogo.svg';

export const getCardProcessorLogo = (cardProcessor:CardProcessors) => {
  switch (cardProcessor) {
    case 'Visa':
      return VisaLogo
    case 'MasterCard':
      return MasterCardLogo
    case 'American Express':
      return AMEXLogo
    case 'Discover':
        return DiscoverLogo
    default:
      return VisaLogo;
  }
}