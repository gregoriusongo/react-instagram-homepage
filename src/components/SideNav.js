import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, useMediaQuery } from "@mui/material";
import logo from "../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";

function Sidenav() {
   const isBigScreen = useMediaQuery('(min-width: 1280px)');

   return (
      <div className="sidenav">
         {
            isBigScreen ?
            <img
            className="sidenav__logo"
            src={logo}
            alt="Instagram Logo"
            />
            : <div className="sidenav__logo">

            <InstagramIcon />
            </div>
         }

         <div className="sidenav__buttons">
            <button className="sidenav__button">
               <HomeIcon />
               {isBigScreen ? <span>Home</span> : null}
            </button>
            <button className="sidenav__button">
               <SearchIcon />
               {isBigScreen ? <span>Search</span> : null}
            </button>
            <button className="sidenav__button">
               <ExploreIcon />
               {isBigScreen ? <span>Explore</span> : null}
            </button>
            <button className="sidenav__button">
               <SlideshowIcon />
               {isBigScreen ? <span>Reels</span> : null}
            </button>
            <button className="sidenav__button">
               <ChatIcon />
               {isBigScreen ? <span>Messages</span> : null}
            </button>
            <button className="sidenav__button">
               <FavoriteBorderIcon />
               {isBigScreen ? <span>Notifications</span> : null}
            </button>
            <button className="sidenav__button">
               <AddCircleOutlineIcon />
               {isBigScreen ? <span>Create</span> : null}
            </button>
            <button className="sidenav__button">
               <Avatar>
                  U
               </Avatar>
               {isBigScreen ?
                  <span>
                     Profile
                  </span>
                  : null}
            </button>
         </div>
         <div className="sidenav__more">
            <button className="sidenav__button">
               <MenuIcon />
               {isBigScreen ?
                  <span className="sidenav__buttonText">More</span>
                  : null
               }
            </button>
         </div>
      </div>
   );
}

export default Sidenav;