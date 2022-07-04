import React,{useState} from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const [isClicked,setIsCliked] = useState(false);


  const handleUser = () => {
    if (user && user._id) {
      Swal.fire({
        title: user.username,
        text: `${user.username} is Logged In`,
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogOut",
      }).then((result) => {
        if (result.isConfirmed) {
           window.localStorage.removeItem("loginuser");
          Swal.fire("User is successfully logged Out");
          window.location.reload(false);
        }
      });
    }
    else{
      navigate("/register");
    }
  };

  const handleBar = () => {
    setIsCliked(!isClicked);
  }

  return (
    <div className="header">
      <a href="/" className="logo">
        <i className="fas fa-graduation-cap"></i> Adheyta
      </a>
      <div className="fas fa-bars" onClick={handleBar}></div>
      <nav className={isClicked ? "navbar-active" : "navbar"}>
        <ul className="nav-ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/student">Student</a>
          </li>
          <li>
            <a href="/teacher">Teacher</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a onClick={handleUser}>
              <i
                class={
                  user && user._id
                    ? "fa-solid fa-user-check"
                    : "fa-solid fa-user"
                }
              ></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
