import React, { useState } from 'react';
import "./mainpage.scss";
import { BiMenu } from 'react-icons/bi';
import { IoChatbubblesSharp } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { FaRegSmile } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';

import MessagesImg from './../../assets/images/tinybirdgames_telegram_background_01.jpg';

const MainPage = () => {
    const [input, setInput] = useState("");

    return (
        <div className="main_page">
            <div className="folders">
                <div className="burger_menu">
                    <BiMenu color="#ddd" size="32" />
                </div>
                <div className="folders_group">
                    <div className="folder active">
                        <IoChatbubblesSharp className="folder_icon" />
                        <span className="folder_name">All Chats</span>
                    </div>
                    <div className="folder">
                        <IoChatbubblesSharp className="folder_icon" />
                        <span className="folder_name">All Chats</span>
                    </div>
                    <div className="folder">
                        <IoChatbubblesSharp className="folder_icon" />
                        <span className="folder_name">All Chats</span>
                    </div>
                    <div className="folder">
                        <IoChatbubblesSharp className="folder_icon" />
                        <span className="folder_name">All Chats</span>
                    </div>
                </div>
            </div>
            <div className="chats">
                <div className="search_bar">
                    <input type="search" placeholder="Search" name="search_chat" id="" />
                </div>
                <div className="chats_list">
                    {
                        new Array(20).fill(0).map(el => (
                            <div className="chat">
                                <div className="left">
                                    <div className="chat_img">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="chat_name">TeraWeb.uz</div>
                                    <div className="last_msg">
                                        <span>https://devhints.io/react</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="messages" style={{backgroundImage: `url(${MessagesImg})`}} >
                <div className="top">
                    <div className="chat_data">
                        <div className="name">
                            <span>TeraWeb</span>
                        </div>
                        <div className="members">
                            <span>999K subscribers</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="icon">
                            <BsSearch />
                        </div>
                        <div className="icon">
                            <BsReverseLayoutSidebarReverse  />
                        </div>
                        <div className="icon">
                            <HiDotsVertical  />
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="message not_from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message not_from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message not_from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message not_from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message not_from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message not_from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                    <div className="message from_me">
                        <div className="content">
                            Testas
                            da
                            AIzaSyB2ufzc8RoKnri8Hjwlj5luQ1Q8BImnr8gasdfasdfasdfasdfasdfasdf
                        </div>
                        <div className="tail"></div>
                        <div className="time">
                            <span>{ new Date().getHours() } : { new Date().getMinutes() }</span>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <label className="file icon">
                        <input type="file" hidden />
                        <HiOutlinePaperClip />
                    </label>
                    <div className="input">
                        <input 
                            type="text"
                            value={input}
                            placeholder="Write message..."
                            onChange={(e) => setInput(e.target.value)}  />
                    </div>
                    <div className="sticker icon">
                        { <FaRegSmile /> }
                    </div>
                    <div className="microphone_send icon">
                        { input === "" ? <BiMicrophone /> : <IoSend color="blue" /> }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainPage;