import React from "react";
import "./Profileleft.css";
import LogoSearch from "../logoSearch/LogoSearch";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";


function Profileleft() {
  return (
    <div className="Profileleft">
      <LogoSearch />
      <InfoCard/>
      <FollowersCard />
    </div>
  );
}

export default Profileleft;
