import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const NavBarWrapper = styled.header`
  height: 120px;
  background-color: #000;
  position : relative;
`;

const Logo = styled.div`
position : absolute;
to:24px;
left : 30px;
height: 60px;
`;

const ResourceLink = styled.div`
font-family : gotham ssm a, gotham ssm b, sans-serif;
  font-weight: 300;
  position : absolute;
  top : 24px;
  right : 40px;
    letter-spacing : 1px
  `;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 2px;
    color : white;
    background : #00bcd4;
    border : 0px;
    text-align : center;

  @media all and (max-width : 820px) {
      padding : 10px 5px;
      font-size: 10px
  }
  @media all and (max-width : 620px) {
      display : none
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left: 50px;
  cursor:pointer;

  @media all and (max-width : 620px) {
      margin-left : 20px;
  }
`;

const Navbar = () => {
  return (
    <NavBarWrapper>
      <Logo>
        <img height="60px" src={logo} alt="logo.png" />
      </Logo>
      <ResourceLink>
        <Button>Try Now</Button>
        <A>About us</A>
        <A>FAQ</A>
        <A>Login</A>
      </ResourceLink>
    </NavBarWrapper>
  );
};

export default Navbar;
