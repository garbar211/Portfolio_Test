import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { AiFillIdcard } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
  <Nav.Item>
              <Nav.Link
                as={Link}
                to="/mylife"
                onClick={() => updateExpanded(false)}
              >
                <AiFillIdcard style={{ marginBottom: "2px" }} /> My life
              </Nav.Link>
            </Nav.Item>

   <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/garret-hashbarger/overlay/contact-info/"
                target="_blank"
                className="fork-btn-inner"
              >
                <BiMessageSquareDetail style={{ fontSize: "1.2em" }} />{" "}
                Contact
              </Button>
            </Nav.Item>


            <Nav.Item className="fork-btn">
              <Button
                href="https://docs.google.com/document/d/1azhigtYxlp65sgWeum7T7znGW60ithsQF6OnXu_CTaI/edit?usp=sharing"
                target="_blank"
                className="fork-btn-inner"
              >
                <BiMessageSquareDetail style={{ fontSize: "1.2em" }} />{" "}
                Refernces(Ext.)
              </Button>
            </Nav.Item>
            
          </Nav>

          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
