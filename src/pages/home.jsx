import React, { useContext, useState } from 'react';
import '../App.css';
import { RiImageAddLine, RiImageAiFill } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPlus, FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/UserContext';

function Home() {
    const { setStartRes, setUserMessage } = useContext(dataContext);
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        setUserMessage(inputText);  // Save user message
        setStartRes(true);
        navigate('/chat');          // Navigate to chat
    };

    return (
        <div className='home'>
            <nav>
                <div className='logo'>Smart AI Bot</div>
            </nav>

            <div className='hero'>
                <span id='tag'>What can I help with?</span>
                <div className="cate">
                    <div className="upImg">
                        <RiImageAddLine />
                        <span>Upload Image</span>
                    </div>
                    <div className="genImg">
                        <RiImageAiFill />
                        <span>Generate Image</span>
                    </div>
                    <div className="chat" onClick={() => navigate('/chat')}>
                        <IoChatbubbleEllipsesSharp />
                        <span>Let's Chat</span>
                    </div>
                </div>
            </div>

            <form className="input-box" onSubmit={handleSubmit}>
                <button id="add" type="button"><FaPlus /></button>
                <input
                    type="text"
                    placeholder='Ask Something...'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button id="submit" type="submit"><FaArrowUp /></button>
            </form>
        </div>
    );
}

export default Home;
