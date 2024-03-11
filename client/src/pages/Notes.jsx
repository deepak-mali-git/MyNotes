import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Note() {
  const [data, setData] = useState([]);
  const [search, setSearchData] = useState([]);
  const { user,ready } = useContext(UserContext);





  if(!ready && !user) {
    return <Navigate to="/login" />
  }





  useEffect(() => {
    async function fetchData() {
        try {
          const response = await axios.get("/data");
          setData(response.data); // Set the data in the component state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    }

    fetchData();
  }, []);



  return (

    <div>
      
      <div className="avail-data">
        {data.map((item,index) => (
          <a className="inline-block" key={item._id} href={`#${item._id}`}>{item.name}</a>
        ))}
      </div>
      

    <div className="doc-render">
    {data.map((item, index) => (
      <div key={item._id} id={item._id} className=" doc-main">
        <div className=" doc-div">
          <img
            src={item.image}
            alt={item.name}
            className=""
            style={{ }}
          />
          <h1 className="">{item.name}</h1>
          <div className="doc-div-info">{item.tags}</div>
          <a href={item.link} target="_blank" className="ancher">
              {item.linkText || 'Visit Link'}
            </a>
        </div>
      </div>
    ))}
  </div>

    </div>

      
  );
}

export default Note;

