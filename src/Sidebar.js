import React, { useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { collection } from '@firebase/firestore';




function Sidebar() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "rooms"), snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ));
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Kotaicode UG </h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Tom Jose
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Inbox" />
            <SidebarOption Icon={DraftsIcon} title="Drafts" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={PeopleAltIcon} title="People" />
            <hr />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Inbox" />
            <SidebarOption Icon={DraftsIcon} title="Drafts" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={PeopleAltIcon} title="People" />
            <SidebarOption Icon={ExpandLessIcon} title="show less" />

            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="channels" />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}



        </div>
    )
}

export default Sidebar
