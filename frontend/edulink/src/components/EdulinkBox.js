import { Avatar } from '@mui/material'
import React from 'react'
import './css/EdulinkBox.css'

function EdulinkBox() {
  return (
    <div className='edulinkBox'>
        <div className='edulinkBox_info'>
            <Avatar />
        </div>
        <div className='edulinkBox_edulink'>
            <p>What is you question or link?</p>
        </div>
    </div>
  );
}

export default EdulinkBox
