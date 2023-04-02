import React from "react";
import Menu from "./menu";
import "./header.css";
import Button from "./button";
import { useState } from 'react'
function Header({ onAboutClick, onDonateClick, onNeedSausageClick }) {

  const headerLinks = [
    { label: "About", url: "#main", onClick: onAboutClick},
    { label: "How to?", url: "#howto" }, 
    { label: "Footer", url: "#footer" },
  ];


  return (
    <header id="header">
      
      <div id="logo_and_menu">
        
        <div id="logo">
          <img src={require(`../images/logo2.jpg`)} alt="sausage logo" />
        </div>
        
        <div id="menu">
            <Menu links={headerLinks} />
        </div>
       
      </div>
      
      
      <div id="description">
          <h1>
          To adopt? Or to donate?
          </h1>
          <p>
          That is a great question, the one who shakes the spear once asked! Here on this site you can do both!
          No need to choose between the impossible! Just click one of the buttons and find out yourself! 
          </p>
      </div>

      <div id="buttons">
      <Button
          label="need sausage?"
          size="large"
          onClick={onNeedSausageClick}
        />
        
        <Button
          label="donate sausage"
          size="large"
          onClick={onDonateClick}
        />
      </div>
    </header>
  );
}

export default Header;
