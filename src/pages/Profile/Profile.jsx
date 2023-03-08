import React from "react";
import PostSide from "../../components/postSide/PostSide";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Profileleft from "../../components/Profileleft/Profileleft";
import Rightside from "../../components/RightSide/Rightside";
import "./Profile.css";

function Profile() {
  return (
    <div className="Profile">
      <Profileleft />

      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <Rightside />
    </div>
  );
}

export default Profile;
