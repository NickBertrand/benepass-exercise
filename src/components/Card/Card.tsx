import { maskCCNumber, formatCCNumber } from '../../lib/card-number';
import { getCardProcessorLogo } from '../../lib/card-logo';
import { CardProps } from './CardInterface';
import CardBackground from '../../img/CardBackground.png';

const Card = ({ cardDetails, cardLogo, showDetails }:CardProps) => {
  const maskedCCNumber = maskCCNumber(cardDetails.ccNumber)
  const formattedCCNumber = formatCCNumber(cardDetails.ccNumber)

  return (
    <div className="p-4 w-80 sm:w-96 sm:p-6 relative">
        <img src={CardBackground} className="rounded-xl w-80 sm:w-96 absolute inset-0 z-0 shadow-lg"/>
        <div className='relative h-48 sm:h-56 flex flex-col justify-between z-30 w-full text-white'>
          <div className='flex flex-row justify-between w-full items-center'>
            <img src={cardLogo} className='w-32'/>
            <div className='rounded-full w-auto bg-white text-gray-900 px-3 py-1 font-semibold text-sm capitalize'>{cardDetails.cardType}</div>
          </div>
          <div className='font-semibold text-2xl'>{showDetails ? formattedCCNumber : maskedCCNumber}</div>
          <div className='flex flex-row'>
            <div className='flex flex-col mr-8'>
              <div className='uppercase opacity-80 text-xs'>Valid Thru</div>
              <div>{cardDetails.expiration}</div>
            </div>
            <div className='flex flex-col relative'>
              <div className='uppercase opacity-80 text-xs'>CVC</div>
              <div className={`${!showDetails && 'text-2xl absolute inset-0 pt-2'} `}>{showDetails ? cardDetails.cvc : '•••'}</div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className=''>ZIP {cardDetails.zip}</div>
            <img src={getCardProcessorLogo(cardDetails.cardProcessor)} className='w-16'/>
          </div>
        </div>
      </div>
  )
}

export default Card