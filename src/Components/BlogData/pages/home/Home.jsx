import { useEffect, useState } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router";
import TopBar from "../../topbar/TopBar";
import axios from "axios";

export default function Home({user}) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios.get("http://localhost:5000/postrecords");
      setPosts(res.data);
    }
    fetchData();
  },[search])
  return (
    <>
      <TopBar fuser={user} />
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar user={user}/>
      </div>
    </>
  );
}
