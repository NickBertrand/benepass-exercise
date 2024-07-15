import CardBackground from './img/CardBackground.png';
import BenepassLogo from './img/BenepassLogo.svg';
import VisaLogo from './img/VisaLogo.svg';
import { maskCCNumber, formatCCNumber } from './lib/card-number';
import { useState } from 'react';

function App() {

  const testData = {
    ccNumber: '1234567812341732',
    cvc: '345',
    zip: '66062'
  }

  const [hideDetails, setHideDetails] = useState(true) 
  const maskedCCNumber = maskCCNumber(testData.ccNumber)
  const formattedCCNumber = formatCCNumber(testData.ccNumber)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">
        Flex card
      </h1>
      <h3>
        Used for pre-tax purposes
      </h3>
      <div className="w-96 p-4 relative">
        <img src={CardBackground} className="rounded-xl w-96 absolute inset-0 z-0"/>
        <div className='relative z-30 w-full text-white'>
          <div className='flex flex-row justify-between w-full'>
            <img src={BenepassLogo} className='w-24'/>
            <div className='rounded-full w-auto bg-white text-gray-900 px-2 py-1 text-sm'>Virtual</div>
          </div>
          <div className='font-semibold'>{hideDetails ? maskedCCNumber : formattedCCNumber}</div>
          <div className='flex flex-row'>
            <div className='flex flex-col mr-4'>
              <div>Valid Thru</div>
              <div>08/28</div>
            </div>
            <div className='flex flex-col'>
              <div>CVC</div>
              <div>{hideDetails ? '***' : testData.cvc}</div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className=''>ZIP {testData.zip}</div>
            <img src={VisaLogo} className='w-16'/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
