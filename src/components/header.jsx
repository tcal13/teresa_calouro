// NavLink for Navigation

import * as React from "react";
import { NavLink } from "react-router-dom";

export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
        <NavLink
            to="/"
            >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Home
              </span>
            )}
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/about"
            >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                About
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Projects
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Contact
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}