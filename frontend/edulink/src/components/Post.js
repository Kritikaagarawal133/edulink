import { Avatar } from '@mui/material'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineRounded, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@mui/icons-material'
import React from 'react'
import './css/Post.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
// import { selectUser } from '../feature/userSlice';
// import { useSelector } from 'react-redux';

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale='en-US' timeStyle="round"/>
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;
  // const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value)
  };
  console.log(answer)

  const handleSubmit = async () => {
    if(post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        // user: user
      }
      await axios
      .post('/api/answers', body, config)
      .then((res) => {
        console.log(res.data);
        alert('Answer added succesfully');
        setIsModalOpen(false);
        window.location.href ='/';
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <div className='post'>
       <div className='post_info'>
        <Avatar src={post?.user?.photo}/>
        <h4>{post?.user?.userName}</h4>
        <small><LastSeen date={post?.createdAt}/></small>
       </div>
       <div className='post_body'>
         <div className='post_question'>
          <p>
            {post?.questionName}
          </p>
          <button 
          onClick={() => {
            setIsModalOpen(true)
            console.log(post?._id);
          }}
          className='post_btnAnswer'>Answer</button>
          <Modal
          open={isModalOpen}
          closeIconIcon={Close} onClose ={()=>setIsModalOpen(false)}
           closeOnEsc 
           center
           closeOnOverlayClick={false}  
           styles={{
             overlay: {
               height:"auto"
             },
           }}      
           >
            <div className='modal_question'>
            <h1>{post?.questionName}</h1>
            <p>asked by{" "}<span className='name'>
              {post?.user?.userName}</span> on{" "} <span className='name'>{new Date(post?.createdAt).toLocaleString()}</span></p>
           </div>
           <div  className="modal_answer"> 
           <ReactQuill value ={answer} onChange ={handleQuill}
           placeholder="Enter your answer"/>
           </div>
           <div className ="modal_buttons">
           <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick = {handleSubmit} type="submit" className="add" >
                Add Answer
              </button>
           </div>
           </Modal>
         </div>
         {post.questionUrl !== "" && <img src={post?.questionUrl} alt='url' />}
        </div>  
        <div className='post_footer'>
            <div className='post_footerAction'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlineRounded />
            <div className='post_footerLeft'>
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
       </div>
       <p
          style={{
            color: "whitesmoke",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "10px 0" 
          }}
       >
        {post?.allAnswers.length} Answers(s)</p>
       <div 
         style={{
            margin: "5px 0px 0px 0px",
            padding: "5px 0px 0px 20px",
            borderTop: "1px solid black",
            marginTop: "10px",
         }}
       className='post_answer'>
          {
            post?.allAnswers?.map((_a) => ( <>
              <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid black",
        }} className='post_answer_container'>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "whitesmoke",
            }} className='post_answered'>
                <Avatar src={_a?.user?.photo}/>
                <div style={{
                    margin: "0px 10px",
                    marginTop:"10px",
                }} className='post-info'>
                    <p>
                        {_a?.user?.userName}
                    </p>
                    <span>{<LastSeen date = {_a?.createdAt} />}</span>
                </div>
            </div>
            <div className='post-answer'>{ReactHtmlParser(_a?.answer)}</div>
        </div>
        </>

       ))}
       </div>
    </div>
  )
}

export default Post
