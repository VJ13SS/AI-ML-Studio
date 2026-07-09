import { useContext } from "react";
import "./navbar.css";
import { LuMenu } from "react-icons/lu";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setDisplaySidebarMobile } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav>
      <img src="./Logo.jpeg" alt="logo" onClick={() => navigate("/")} />
      <i onClick={() => setDisplaySidebarMobile(true)}>
        <LuMenu />
      </i>
    </nav>
  );
}
