import React from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom"
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";


function Chat() {
    const { roomId } = useParams();
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat_channelName">
                        <strong># general</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
