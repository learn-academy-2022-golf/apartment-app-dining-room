import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        {logged_in && (
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </NavItem>
        )}
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            All Apartments
          </NavLink>
        </NavItem>
        {logged_in && (
          <NavItem>
            <NavLink to="/apartmentnew" className="nav-link">
              Create an Apartment
            </NavLink>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <NavLink to="/myapartments/" className="nav-link">
              My Apartments
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </>
  );
};

export default Navigation;
