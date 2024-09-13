import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../StdInfo.json";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import "./AI26.css";

function BBIT() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div
      className="templateContainer"
      style={{
        backgroundImage:
          "url(https://tse1.mm.bing.net/th?id=OIP._t5PwJneEsl0m0qJW7PoUgHaEK&pid=Api&P=0&h=180)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="searchInput_Container">
        <input
          type="text"
          placeholder="Search student name..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      <div className="heading">B.TECH CSE-AI (2022-26)</div>
      <div className="AI26home">
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div
                  className="template"
                  key={val.id}
                  style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}
                  onClick={() => {
                    navigate(`/${val.id}/${val.name}`);
                  }}
                >
                  <img
                    src={val.img}
                    style={{
                      border: "3px solid grey",
                      borderRadius: "20px",
                      transition: "transform 0.3s",
                    }}
                    onMouseOver={(event) => {
                      event.target.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(event) => {
                      event.target.style.transform = "scale(1)";
                    }}
                  />
                  <br />
                  <h3>{val.name}</h3>
                  <h6>{val.description}</h6>
                </div>
              );
            })}
        </div>
        <div className="post">
          <div className="postHead"><div>POST ALBUM</div><MdOutlineAddCircleOutline/></div>
          <div className="postContent">
            <div className="postCard">
              <div
                className="postImg"
                style={{
                  backgroundImage:
                    "url(https://tse1.mm.bing.net/th?id=OIP.4PXMX9BFL8CUq0SjuFVeYwHaE8&pid=Api&P=0&h=180)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="postTitle">Freshers Party 2022 AI Dept. </div>
            </div>
            <div className="postCard">
              <div
                className="postImg"
                style={{
                  backgroundImage:
                    "url(https://tse1.mm.bing.net/th?id=OIP.pD1xt22BhumVCBRfhpNNzAHaEK&pid=Api&P=0&h=180)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="postTitle">MAGNUS 2022</div>
            </div>
            <div className="postCard">
              <div
                className="postImg"
                style={{
                  backgroundImage:
                    "url(https://tse2.mm.bing.net/th?id=OIP.sG1-_EqPovP_syNAJl1J7AHaE8&pid=Api&P=0&h=180)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="postTitle">HOLI 2023</div>
            </div>
            <div className="postCard">
              <div
                className="postImg"
                style={{
                  backgroundImage:
                    "url(https://tse4.mm.bing.net/th?id=OIP.4BtOjw6UuZRY3K-MTMFWhQHaEK&pid=Api&P=0&h=180)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="postTitle">HACKATHON 2024</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default BBIT;
