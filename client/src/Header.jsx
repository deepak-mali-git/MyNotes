import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";



const Header = ({ dataFetch }) => {

  const { user, ready } = useContext(UserContext);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [input, setInput] = useState("")

  const navigate = useNavigate()

  const searchToggleClass = () => {
    setIsClassAdded(!isClassAdded);
  };




  async function goBtn(ev) {
    setIsClassAdded(!isClassAdded);
    setInput("")

    const payload = { keyword: input };
    if (!user && !ready) {
      alert("first login to search..")
      navigate('/notes')
    }
    else {
      dataFetch(payload);
    }
  }






  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      goBtn();
    }
  }



  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post('/login', { email, password })
      setUser(data)
      alert('Login successful');
      setRedirect(true)
    } catch (e) {
      alert('Login failed')
    }
  }



  return (
    <header className="flex justify-between">
      <div className="change-logo md:h-16 h-28 mx-4 md:mx-auto  md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="md:order-1">
          <Link to={"/"}>
            <img src="./logo.png" alt="" />
          </Link>
        </div>


          <div
            className={`fixed-links mt-2 flex gap-1 sm:gap-2 header-links ${isClassAdded ? "display-none" : ""
              }`}
          >
            <Link className="mr-2" to={"/notes"}>Notes</Link>
            <div className="mr-2 border-l border-gray-300"></div>
            <Link className="mr-2" to={"/about"}>About Us</Link>
            <div className=" mr-2 border-l border-gray-300"></div>
            <Link className="mr-2" to={"/contact"}>Contact Us</Link>
            <div className=" mr-2 border-l border-gray-300"></div>
            {/* <Link className="mr-2" to={"/qusetions"}>Questions</Link> */}
          </div>


        <div className=" fixed-search flex order-3 w-full md:w-auto md:order-2 justify-center">

          <div className="flex">
            <input
              placeholder="Search here.."
              type="text"
              className={`hello ${isClassAdded ? "search-added" : "display-none"
                }`}
              value={input}
              onChange={(ev) => setInput(ev.target.value.toLowerCase())}
              onKeyPress={handleKeyPress}
            />
            <button
              className={`bg-primary text-white p-1 ml-2 rounded-full ${isClassAdded ? "search-class-added" : "search-class-removed"
                }`}
              onClick={searchToggleClass}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 ${isClassAdded ? "display-none" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 mx-2 ${isClassAdded ? "" : "display-none"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button onClick={goBtn} className={`${isClassAdded ? "go-btn" : "display-none"}`}>
              <h2 className="mx-2">go</h2>
            </button>
          </div>
        </div>

        <div className="fixed-account order-2 md:order-3">
        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center border border-gray-300 rounded-full py-2 px-4"
        >


          <div className=" bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden hide-small ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative top-1"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>


          {!!user && <div className="ml-2">{user.name}</div>}
        </Link>
        </div>


      </div>
    </header>
  );
}



export default Header;