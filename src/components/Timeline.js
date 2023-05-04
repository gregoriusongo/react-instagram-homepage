import React, { useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import Suggestion from "./Suggestion";

function Timeline() {
   const [posts, setPosts] = useState([
      {
         user: "user1",
         postImage:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
         likes: 5,
         timestamp: "2d",
         caption: "lorem ipsum",
      },
      {
         user: "user2",
         postImage:
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
         likes: 100,
         timestamp: "2d",
         caption: "lorem ipsum",
      },
      {
         user: "user3",
         postImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
         likes: 2000,
         timestamp: "2d",
         caption: "lorem ipsum",
      },
      {
         user: "user4",
         postImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
         likes: 534,
         timestamp: "2d",
         caption: "lorem ipsum",
      },
   ]);

   return (
      <div className="timeline">
         <div className="timeline__left">
            <div className="timeline__posts">
               {posts.map((post) => (
                  <Post
                     user={post.user}
                     postImage={post.postImage}
                     likes={post.likes}
                     timestamp={post.timestamp}
                     caption={post.caption}
                  />
               ))}
            </div>
         </div>
         <div className="timeline__right">
            <Suggestion />
         </div>
      </div>
   );
}

export default Timeline;
