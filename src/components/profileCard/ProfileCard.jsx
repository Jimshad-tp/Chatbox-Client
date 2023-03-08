import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.webp";
import "./ProfileCard.css";



function ProfileCard() {

  const ProfilePage = true;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="Cover Image" />
        <img src={Profile} alt="Profile Image" />
      </div>
      <div className="profileName">
        <span>Jimshad tp</span>
        <span>Mern stack developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
        <div className="follow">
          <span>7,455</span>
          <span>Following</span>
        </div>
        <div className="vl">
        </div>
        <div className="follow">
            <span>5,125</span>
          <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
             <div className="vl" >
        </div>
        <div className="follow">
            <span>3</span>
          <span>Posts</span>
          </div>
            </>
          )}
        </div>
        <hr/>
      </div>
      {
      ProfilePage ? "" : 
      <div className="myprofile">
        
        <span>My Profile</span>
      </div>}
   
    </div>
  );
}

export default ProfileCard;
