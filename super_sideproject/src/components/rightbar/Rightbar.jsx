
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({profile}) {
    const HomeRightbar = ()=>{
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift3.png" alt="" />
                    <span className="birthdayText">
                        <b>游旻昌</b> and 和<b>其他三個人</b>今天生日
                    </span>
                </div>
                <img src="assets/add.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">正在線上的好友</h4>
                <ul className="rightbarFirendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>    
            </>
        )
    }
    const ProfileRightbar = () =>{
        return(
            <>
                <h4 className="rightbarTitle">用戶資訊</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">城市:</span>
                        <span className="rightbarInfoValue">高雄</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">國家:</span>
                        <span className="rightbarInfoValue">台灣</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">感情狀態:</span>
                        <span className="rightbarInfoValue">甜蜜交往中</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">他的朋友</h4>
                <div className="rightbarFollowings">
                    
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div><div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">林士淵</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/> }  
            </div>
        </div>
    )
}
