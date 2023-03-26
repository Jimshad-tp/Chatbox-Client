import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.webp";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../Actions/uploadAction";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc:desc.current.value
    }
    if(image){
      const data = new FormData()
      const fileName = Date.now() + image.name;
      data.append("name",fileName)
      data.append("file",image)
      newPost.image = fileName
      console.log(newPost,"Hai");

      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }
   try {
    dispatch(uploadPost(newPost))
   } catch (error) {
    console.log(error);
   }

  };

  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="ProfileImage" />
      <div>
        <input type="text" ref={desc} required placeholder="What's happening?" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>


          <button className="button ps-button"
          onClick={handleSubmit}


          >Share</button>


          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="Image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
