import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";

function Story({ image, username }) {
   return (
      <div className="story">
         <div className="story__image">
            <Avatar>
               {username.charAt(0).toUpperCase()}
            </Avatar>
         </div>
         <div className="story__username">
            {username}
         </div>
      </div>
   );
}

export default Story;
