import React from 'react';
import EdulinkHeader from './EdulinkHeader';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import './css/Edulink.css';

function Edulink() {
  return (
    <div className='edulink'>
      <EdulinkHeader/> 
      <div className='edulink_contents'>
        <div className='edulink_content'>
          <Sidebar/>
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Edulink;
