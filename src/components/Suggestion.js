import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestion.css";

function Suggestion() {
   return (
      <div className="suggestions">
         <div className="profile">
            <Avatar className="profile__avatar">
               U
            </Avatar>
            <div className="profile__user">
               <span className="profile__username">Username</span>
               <div className="profile__fullname">User Full Name</div>
            </div>
            <button className="switch__button">Switch</button>
         </div>
         <div className="suggestions__title">Suggested for you
            <span className="suggestions__title__all">
               See All
            </span>
         </div>
         <div className="suggestions__usernames">
            <div className="suggestions__username">
               <div className="username__left">
                  <span className="avatar">
                     <Avatar>SU</Avatar>
                  </span>
                  <div className="username__info">
                     <span className="username">suggested_user1</span>
                     <span className="relation">Followed by your_friend + 3 more</span>
                  </div>
               </div>
               <button className="follow__button">Follow</button>
            </div>

            <div className="suggestions__username">
               <div className="username__left">
                  <span className="avatar">
                     <Avatar>SU</Avatar>
                  </span>
                  <div className="username__info">
                     <span className="username">suggested_user2</span>
                     <span className="relation">New to Instagram</span>
                  </div>
               </div>
               <button className="follow__button">Follow</button>
            </div>

            <div className="suggestions__username">
               <div className="username__left">
                  <span className="avatar">
                     <Avatar>SU</Avatar>
                  </span>
                  <div className="username__info">
                     <span className="username">suggested_user3</span>
                     <span className="relation">New to Instagram</span>
                  </div>
               </div>
               <button className="follow__button">Follow</button>
            </div>

            <div className="suggestions__username">
               <div className="username__left">
                  <span className="avatar">
                     <Avatar>SU</Avatar>
                  </span>
                  <div className="username__info">
                     <span className="username">suggested_user4</span>
                     <span className="relation">New to Instagram</span>
                  </div>
               </div>
               <button className="follow__button">Follow</button>
            </div>
         </div>
      </div>
   );
}

export default Suggestion;
