import React,{useState,useEffect} from "react";
import "./post.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const PF = "http://localhost:5000/images/"
  const [post,setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/postrecords")
    .then((res)=>{
      setPost(res.data);
    })
  },[]);

  return(
    <>
    {post.map((val,key)=>{
       return(
        <div className="post">
          {val.photo && <img className="postImg" src={PF+val.photo} alt=""/>}
          <div className="postInfo">
          <Link to={`/post/${val._id}`} className="link">
            <span className="postTitle">{val.title}</span>
          </Link>
          <hr />
          <span className="postDate"> 
            {new Date(val.createdAt).toDateString()}
          </span>
          </div>
          <p className="postDesc">{val.desc}</p>
        </div>
       )
    })}
    </>
  ) 
}
