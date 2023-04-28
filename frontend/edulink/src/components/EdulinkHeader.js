import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { AssignmentTurnedInOutlined, ExpandMore, FeaturedPlayListOutlined, PeopleAltOutlined, Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Button, Input } from '@mui/material';
import './css/EdulinkHeader.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';


function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert('Error in adding question')
        });
    }
  };


  return (

    
    <div className='uheader'>
      <div className='uheader-content'>
        <div className='logo'>
        <img src='https://i.postimg.cc/vBK9zzHk/logo192.png' alt='logo' />
        </div>
              <div className='icons'>
                <div className='icon'><HomeIcon /></div>
                <div className='icon'><FeaturedPlayListOutlined /></div>
                <div className='icon'><AssignmentTurnedInOutlined /></div>
                <div className='icon'><PeopleAltOutlined /></div>
            </div>
            <div className="uheader_input">
              <Search />
              <input type="text" placeholder="Search questions" />
            </div>
            <div className="uheader_Rem">
               <Avatar />
            
            </div>
            <div className="uheader_button">
              <Button onClick = {() => setIsModalOpen(true)}>Add Questions</Button>
              <Modal
                open={isModalOpen}
                closeIconIcon={Close} onClose ={()=>setIsModalOpen(false)}
                closeOnEsc 
                center
                closeOnOverlayClick={false}  
                styles={{
                  overlay:{
                    height:"auto",
                    background:"#000"
                  },
                }}       
              >
           <div className='modal_title'>
                  <h5>Add Question</h5>
                  <h5>Share Link</h5>
                </div>
                <div className='modal_info'>
                  <Avatar/>
                  <div className='modal_scope'>
                    <PeopleAltOutlined />
                    <p>Public</p>
                    <ExpandMore />
                  </div>
                </div>
                <div className='modal_field'>
                  <Input
                  value={question}
                  onChange = {(e) => setQuestion(e.target.value)}
                  type='text' 
                  style={{
                    width: "100%"
                   }}
                  placeholder="Start your question with 'What', 'How', 'Why', etc. "/>
                  <div style={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <input type='text'
                    value = {inputUrl}
                    onChange = {(e) => setInputUrl(e.target.value)}
                    style={{
                      margin: "5px 0",
                      border: "1px solid lightgray",
                      padding: "10px",
                      outline: "2px solid #000",
                      width: "100%"
                     }}
                    placeholder = "Optional: include a link that gives context" />
                    {inputUrl !== "" && <img 
                    style={{
                      height: "40vh",
                      objectFit: "contain"
                    }}
                    src={inputUrl} alt="displayimage"/>}
                  </div>
                </div>
                <div className='modal_buttons'>
                  <button className='cancel' onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button onClick={handleSubmit}
                  type='submit' className='add'>
                    Add Question
                  </button>
                </div>
           </Modal>
        </div>
      </div>
    </div>
  )
}
export default Header
