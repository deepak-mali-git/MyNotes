import React, { useContext, useEffect } from "react";
import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../UserContext";


const Search = ({ demo }) => {

  const { user,ready } = useContext(UserContext);
  const navigate = useNavigate();
  let first = true


  

  useEffect(() => {

    if(!user && !ready) {
      navigate("/");
    }
    // if (!demo || demo.length === 0) {
    // }
  }, [demo]);

  <h1>Search Page</h1>
  return (
    

    <div className="doc-render">
    {demo.map((item, index) => (
      <div key={item._id} className=" doc-main">
        <div className=" doc-div">
          <img
            src={item.image}
            alt={item.name}
            className=""
            style={{ }}
          />
          <h1 className="">{item.name}</h1>
          <div className="doc-div-info">{item.tags}</div>
          <a href={item.link} className="ancher" target="_blank">
            {item.linkText || 'Visit Link'}
          </a>
          </div>
        </div>
    ))}
  </div>
  );
};

export default Search;
