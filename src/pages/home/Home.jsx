import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'
import Rightside from '../../components/RightSide/Rightside'

function Home() {
  return (
    <div className="Home">
<ProfileSide/>
<PostSide/>
<Rightside/>
    </div>
  )
}

export default Home