import React from 'react';
import "./mainpage.scss";
import { BiMenu } from 'react-icons/bi';
import { IoChatbubblesSharp } from 'react-icons/io5'

const MainPage = () => {
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
            <div className="messages">

            </div>
        </div>
    )
}

export default MainPage;