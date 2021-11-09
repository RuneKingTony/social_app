import "./sidebar.css";
import { RssFeed } from "@material-ui/icons";
import { Bookmarks } from "@material-ui/icons" ;
import { HelpOutline } from "@material-ui/icons" ;
import { LocalLibrary } from "@material-ui/icons" ;
import { LocalMall} from "@material-ui/icons" ;
import { Chat} from "@material-ui/icons" ;
import { VideoLibrary} from "@material-ui/icons" ;
import { Group } from "@material-ui/icons" ;
import{ Users } from "../../dummyData";
import Friend from "../friend/Friend";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feeds</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalLibrary className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalMall className="sidebarIcon" />
                        <span className="sidebarListItemText">Products</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                 <hr className="sidebarHr"/>
                 <ul className="sidebarFriendList">
                 {Users.map(u=>(
                     <Friend key={u.id}user={u}/>
                 ))}
                 </ul>

            </div>
        </div>
    );
};

export default Sidebar;
 