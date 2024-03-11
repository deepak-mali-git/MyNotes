import "./App.css";
import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Questions from "./pages/Questions";
import { useEffect, useState } from "react";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';




axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true;


function App() {

  const navigate = useNavigate();
  


  const [searchResults, setSearchResults] = useState([]);
  const [headerData, setHeaderData] = useState();




  const handleDataFetch = async (searchData) => {
    try {
      const response = await axios.post("/search", searchData);
      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        // setHeaderData(data)
        setSearchResults(data)
        navigate('/search')
      } else {
        // Handle unexpected status codes
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      // Handle network errors or errors thrown during the asynchronous operation
      console.error("An error occurred:", error.message);
    }
  };


  return (
    <UserContextProvider>
      <Routes>  
        <Route path="/" element={<Layout dataFetch={handleDataFetch} setHeaderData={setHeaderData} />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/questions" element={<Questions />} /> */}
          <Route path="/search" element={<Search demo={searchResults}/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
