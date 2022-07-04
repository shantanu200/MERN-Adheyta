import React, { useState, useEffect } from "react";
import "./Notes.css";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const Notes = ({ user }) => {
  const [notes, setNotes] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:5000/notes/record/${user.username}`)
      .then((res) => {
        setNotes(res.data);
        return res.data;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios.get(`http://localhost:5000/notes/delete/${id}`).then((res) => {
          console.log(res);
        });
        window.location.reload(false);
      }
    });
  };

  const handleEdit = (id) => {
    axios.get(`http://localhost:5000/notes/${id}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="stud-header">
        <h1>NOTES PANEL</h1>
      </div>
      <div className="stud-read">
        <div className="stud-row">
          {notes.map((val, key) => {
            return (
              <div className="stud-col">
                <h1>
                  Subject: <span>{val.subject}</span>
                </h1>
                <h1>
                  Topic:<span>{val.topic}</span>
                </h1>
                <h1>
                  Title:<span>{val.title}</span>
                </h1>
                <h1>
                  Description: <span>{val.des}</span>
                </h1>
                <h1 className="stud-col-footer">
                  <div className="stud-col-icons">
                    <MdDelete
                      className="icon-delete"
                      onClick={() => {
                        handleDelete(val._id);
                      }}
                    />
                    <MdEdit
                      className="icon-edit"
                      onClick={() => {
                        handleEdit(val._id);
                      }}
                    />
                  </div>
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
