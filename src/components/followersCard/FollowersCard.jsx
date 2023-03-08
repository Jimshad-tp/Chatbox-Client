import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../data/FollowersData";
function FollowersCard() {
  return (
    <div className="followersCard">
      <h4>Who is following you</h4>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img
                src={follower.img}
                alt="FollowerImg"
                className="followerImg"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.userName}</span>
              </div>
            </div>
            <button className="button fc-button" >Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
