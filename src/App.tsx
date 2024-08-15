import { useState } from 'react';
import { Card } from './components/Card';
import { CardDetails } from './components/Card/CardInterface';
import BenepassLogo from './img/BenepassLogo.svg';

function App() {
  //Would normally get this data from an API. Hardcoding here for ease of use. 
  const cardData: CardDetails = {
    ccNumber: '1234567812341732',
    cvc: '345',
    expiration: '08/28',
    zip: '66062',
    cardType: 'virtual',
    cardProcessor: 'Visa',
  }

  const [showDetails, setShowDetails] = useState(false) 

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-semibold">
        Flex card
      </h1>
      <h2 className='mb-8 text-xl'>
        Used for pre-tax purchases
      </h2>
      <Card cardDetails={cardData} cardLogo={BenepassLogo} showDetails={showDetails} />
      <div className='flex flex-row mt-2 items-center'>
        <input className='rounded border-gray-300 h-5 w-5 checked:bg-rose-500 checked:hover:bg-rose-500 checked:focus:bg-rose-500 focus:ring-rose-500' type='checkbox' name='showDetails' checked={showDetails} onChange={() => setShowDetails(!showDetails)}/>
        <label htmlFor='checkbox' className={`${showDetails && 'text-rose-500'} text-gray-700 font-light pl-2`}>Show details</label>
      </div>

    </div>
  );
}

export default App;
