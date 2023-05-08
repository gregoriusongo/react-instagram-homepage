import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp, caption, comment, totalComment }) {
   return (
      <div className="post">
         <div className="post__header">
            <div className="post__headerAuthor">
               <Avatar style={{ marginRight: "10px" }}>
                  {user.charAt(0).toUpperCase()}
               </Avatar>{" "}
               {user} • <span>{timestamp}</span>
            </div>
            <MoreHorizIcon />
         </div>
         <div className="post__image">
            <img src={postImage} alt="Post Image" />
         </div>
         <div className="post__footer">
            <div className="post__footerIcons">
               <div className="post__iconsMain">
                  <FavoriteBorderIcon className="postIcon" />
                  <ChatBubbleOutlineIcon className="postIcon" />
                  <TelegramIcon className="postIcon" />
               </div>
               <div className="post__iconSave">
                  <BookmarkBorderIcon className="postIcon" />
               </div>
            </div>
            <div>
               {likes.toLocaleString('en-US')} likes
            </div>
            <div>
               <span className="post__caption_user">{user}</span> <span>{caption}</span>
            </div>
            {
               totalComment > 2 ? (
                  <div className="post__view_all_comment">
                     View all {totalComment} comments
                  </div>
               ) : null
            }
            {
               comment !== undefined ? (
                  comment.map((item, index) => (
                     <div>
                        <span className="post__caption_user">{item.user}</span> <span>{item.comment}</span>
                     </div>
                  ))
               ) : (null)
            }
            <div className="post__add_comment">
               Add a comment...
            </div>
            <hr/>
         </div>
      </div>
   );
}

export default Post;
