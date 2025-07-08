import React, { useContext, useState } from 'react';
import '../App.css';
import { dataContext } from '../context/UserContext.jsx';
import { FaPlus, FaArrowUp } from "react-icons/fa";

function Chat() {
    const { userMessage } = useContext(dataContext);
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        console.log("Send:", inputText);
        setInputText("");
    };

    return (
        <div className='chat-wrapper'>
            {/* ✅ Top Navigation */}
            <nav>
                <div className='logo'>Smart AI Bot</div>
            </nav>

            <div className='chat-page'>
                <div className="user">
                    <img src="" alt="user" />
                    <span>{userMessage}</span>
                </div>

                <div className="ai">
                    <img src="" alt="ai" />
                    <span>{userMessage ? "Let me think about that..." : "Hi there!"}</span>
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

export default Chat;
