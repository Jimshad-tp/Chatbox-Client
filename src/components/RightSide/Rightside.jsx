import React,{useState} from 'react'
import './Rightside.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModel from '../ShareModel/shareModel';


function Rightside() {
  const [modelOpened,setModelOpened] = useState(false)
  return (
    <div className="Rightside">
        <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard/>
      <button className="button r-button" onClick={()=> setModelOpened(true)
      } >Share</button>
      <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />

    </div>
  )
}

export default Rightside