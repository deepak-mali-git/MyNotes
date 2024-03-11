import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";

export default function Layout({ dataFetch}) {
  return (
    <div className="pt-4  flex flex-col min-h-screen">
      <Header dataFetch={dataFetch} />
      <Outlet />
      <Footer />
    </div>
  );
}
