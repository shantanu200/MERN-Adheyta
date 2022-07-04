import "./single.css";
import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";

export default function Single({user}) {
  return (
    <div className="single">
      <SinglePost user={user}/>
      <Sidebar />
    </div>
  );
}
