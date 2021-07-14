import './profile.css'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/2.jpg" 
                             alt="" 
                             className="profileCoverImg" 
                        />
                        <img src="assets/person/3.jpg" 
                             alt="" 
                             className="profileUserImg" 
                        />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">游旻昌</h4>
                        <span className="profileInfoDesc">帥氣霸道總柴</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/> 
                </div>
            </div>     
        </div>
        
        </>
    )
}
