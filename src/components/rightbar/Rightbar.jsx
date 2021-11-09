import "./rightbar.css";
import { Cake } from "@material-ui/icons"
import { Users } from "../../dummyData"
import Online from "../online/Online";



export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>

                <div className="birthdayContainer">
                    <Cake className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Polar B </b> and <b> 3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="assets/Titan.jpeg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>

            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information Title</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Nigeria</span>
                    </div>
                    <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
                </div>
                
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/images (1).jpg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Legend </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/image2.jpg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">James Bradly </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/image1.jpg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Kate Williams </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/images (3).jpg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Jude Evans </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/images.jpg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Daniel Goff </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/image2.jpg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Tony Dev </span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> :<HomeRightbar/>}
            </div>
        </div>
    );
}


