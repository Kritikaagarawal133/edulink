import React from 'react'
import './css/WidgetContent.css'

function WidgetContent() {
  return (
    <div className='widget_contents'>
        <div className='widget_content'>
            <img src=' https://1.bp.blogspot.com/-Iuo6R-kkxRM/XOpe5lrpaYI/AAAAAAAAIZM/J_Fii8KSPVY-RCO4gCNdilAkQMslfgyFwCLcBGAs/s1600/p2.JPG' alt='' />
            <div className='widget_contentTitle'>
                <h5>Technical News</h5>
                <p><a href="https://instagram.com/thetechcastle?igshid=YmMyMTA2M2Y=">What's new going on in the technical field</a></p>
            </div>
        </div>
        <div className='widget_content'>
            <img src='https://nahswingspan.com/wp-content/uploads/2018/04/Rumors-logo.png' alt='' />
            <div className='widget_contentTitle'>
                <h5>Fest</h5>
                <p><a href="https://instagram.com/_mody_university_?igshid=YmMyMTA2M2Y=">What is going on in the college</a></p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent
