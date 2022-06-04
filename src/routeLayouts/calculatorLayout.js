import { useState } from 'react';
import { Outlet} from 'react-router-dom';
import Infobar from '../components/InfoBar/Infobar';
import Navbar from '../components/Navbar/Navbar';
import { CURRENT_VERSION } from '../const/currentVersion';

const CalculatorLayout = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (

    <div id='calculatorContainer' className='container-fluid' style={{ backgroundColor: "#266d9d" }}>
      <div className='row align-items-start'>

        <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        <div id='page-content' className='col p-0 min-vh-100 align-self-stretch d-flex flex-column' style={{ backgroundColor: "#f7f7f7" }}>

          <Infobar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <div className='d-flex flex-column justify-content-between h-100'>
            <Outlet />

            <footer className='d-flex justify-content-between bg-white py-2'>
              <p className='ps-3 m-0 fs-7'>{CURRENT_VERSION}</p>
              <p className='pe-3 m-0 fs-7'>© Flaviu Pop. All rights reserved</p>
            </footer>
          </div>
        </div>

      </div>
    </div>

  );
}

export default CalculatorLayout;