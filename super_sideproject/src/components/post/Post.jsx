import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users} from '../../dummyData'
import { useState } from "react"
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    
    const likeHandler= ()=>{
        //如果有喜歡過的話就扣一沒有喜歡過則是加一
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
             <div className="postWrapper">
                 <div className="postTop">
                     <div className="postTopLeft">
                         <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture}
                              alt="" 
                              className="postProfileImg"   
                         />
                         <span className="postUsername">
                             {Users.filter((u)=>u.id===post.userId)[0].username}
                         </span>
                         <span className="postDate">{post.date}</span>
                     </div>
                     <div className="postTopRight">
                         <MoreVert/>
                     </div>
                 </div>
                 <div className="postCenter">
                     <span className="postText">{post?.desc}</span>
                     <img  className="postImg" src={post.photo} alt=""/>
                 </div>
                 <div className="postBottom">
                     <div className="postBottomLeft">
                         <img className="likeIcon" src="assets/like1.png" onClick={likeHandler} alt=""/>
                         <img className="likeIcon" src="assets/heart2.png"onClick={likeHandler} alt=""/>
                         <span className="postLikeCounter">{like}個喜歡</span>
                     </div>
                     <div className="postBottomRight">
                         <span className="postCommentText">{post.comment}個評論</span>
                     </div>
                 </div>
             </div>
        </div>
    )
}
