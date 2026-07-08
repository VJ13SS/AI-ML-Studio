import { NavLink, useLocation } from "react-router-dom";
import "./sidebar_mobile.css";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaFlask,
  FaGraduationCap,
  FaCross,
} from "react-icons/fa";
import {
  LuBookOpenText,
  LuCircleUser,
  LuCircleUserRound,
  LuFile,
  LuFlashlight,
  LuFlaskConical,
  LuHouse,
  LuNewspaper,
  LuUser,
  LuWrench,
} from "react-icons/lu";
export default function SidebarMobile() {
  const location = useLocation().pathname.split("/");
  const pathName = location[location.length - 1];
  return (
    <div className="sidebar_mobile_container">
        <div className="sidebar_mobile_header">
             <img src="./Logo.jpeg" alt="logo" />
             <i><FaCross /></i>
        </div>
     
      <div className="sidebar_mobile_links">
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          {" "}
          <p
            style={{
              color: `${pathName === "" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuHouse /> <span>Home</span>
          </p>
        </NavLink>
        <NavLink to={"/about"} style={{ textDecoration: "none" }}>
          <p
            style={{
              color: `${pathName === "about" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "about" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuUser /> <span>About</span>
          </p>
        </NavLink>
        <NavLink to={"/projects"} style={{ textDecoration: "none" }}>
          <p
            style={{
              color: `${pathName === "projects" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "projects" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuFile />
            <span>Projects</span>
          </p>
        </NavLink>
        <NavLink to={"/tools"} style={{ textDecoration: "none" }}>
          <p
            style={{
              color: `${pathName === "tools" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "tools" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuWrench />
            <span>Tools</span>
          </p>
        </NavLink>
        <NavLink to={"/learning"} style={{ textDecoration: "none" }}>
          <p
            style={{
              color: `${pathName === "learning" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "learning" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuBookOpenText /> <span>Learning</span>
          </p>
        </NavLink>
        <NavLink to={"/laboratory"} style={{ textDecoration: "none" }}>
          <p
            style={{
              color: `${pathName === "laboratory" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "laboratory" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuFlaskConical />
            <span>Laboratory</span>
          </p>
        </NavLink>
        <NavLink to={"/blogs"} style={{ textDecoration: "none" }}>
          <p
            style={{
              color: `${pathName === "blogs" ? "indigo" : "black"}`,
              backgroundColor: `${pathName === "blogs" ? "rgb(233, 213, 248)" : ""}`,
            }}
          >
            <LuNewspaper />
            <span>Blogs</span>
          </p>
        </NavLink>
      </div>
    </div>
  );
}
