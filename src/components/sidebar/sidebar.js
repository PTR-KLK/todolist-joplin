import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavList, NavButton } from "./sidebar.style";
import { CogIcon, TasksIcon, HomeIcon } from "react-line-awesome";

const Sidebar = (props) => {
  return (
    <Navbar isFixed={props.isFixed}>
      <NavList>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            <NavButton id="home" onClick={props.showProjectsBar}>
              <HomeIcon />
              Home
            </NavButton>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <NavButton id="projects" onClick={props.showProjectsBar}>
              <TasksIcon />
              Projects
            </NavButton>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/settings">
            <NavButton id="settings" onClick={props.showProjectsBar}>
              <CogIcon />
              Settings
            </NavButton>
          </Link>
        </li>
      </NavList>
    </Navbar>
  );
};

export default Sidebar;
