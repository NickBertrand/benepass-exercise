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

  const [showDetails, setShowDetails] = useState(false) 
  const maskedCCNumber = maskCCNumber(testData.ccNumber)
  const formattedCCNumber = formatCCNumber(testData.ccNumber)

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-semibold">
        Flex card
      </h1>
      <h2 className='mb-8 text-xl'>
        Used for pre-tax purchases
      </h2>
      <div className="p-4 w-80 sm:w-96 sm:p-6 relative">
        <img src={CardBackground} className="rounded-xl w-80 sm:w-96 absolute inset-0 z-0 shadow-lg"/>
        <div className='relative h-48 sm:h-56 flex flex-col justify-between z-30 w-full text-white'>
          <div className='flex flex-row justify-between w-full items-center'>
            <img src={BenepassLogo} className='w-32'/>
            <div className='rounded-full w-auto bg-white text-gray-900 px-3 py-1 font-semibold text-sm'>Virtual</div>
          </div>
          <div className='font-semibold text-2xl'>{showDetails ? formattedCCNumber : maskedCCNumber}</div>
          <div className='flex flex-row'>
            <div className='flex flex-col mr-8'>
              <div className='uppercase opacity-80 text-xs'>Valid Thru</div>
              <div>08/28</div>
            </div>
            <div className='flex flex-col relative'>
              <div className='uppercase opacity-80 text-xs'>CVC</div>
              <div className={`${!showDetails && 'text-2xl absolute inset-0 pt-2'} `}>{showDetails ? testData.cvc : '•••'}</div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className=''>ZIP {testData.zip}</div>
            <img src={VisaLogo} className='w-16'/>
          </div>
        </div>
      </div>
      <div className='flex flex-row mt-2 items-center'>
        <input className='rounded border-gray-300 h-5 w-5 checked:bg-rose-500 checked:hover:bg-rose-500 checked:focus:bg-rose-500 focus:ring-rose-500' type='checkbox' name='showDetails' checked={showDetails} onChange={() => setShowDetails(!showDetails)}/>
        <label htmlFor='checkbox' className={`${showDetails && 'text-rose-500'} text-gray-700 font-light pl-2`}>Show details</label>
      </div>

    </div>
  );
}

export default App;
