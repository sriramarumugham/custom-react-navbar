import React, { Component } from "react";
import Menueitems from "./Menue-items";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
  }
  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  render() {
    const { menu } = this.state;
    return (
      <>
        <div className="NavebarComponents">
          Custom Navbar
          <h1 className="Navbar-logo"></h1>
          <div className="menue-icon">
            <i
              className={menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              onClick={this.handleClick}
            ></i>
          </div>
          <ul className=" navList">
            {Menueitems.map((item, index) => {
              return (
                <li>
                  <a className="CName" href={item.url} key={index}>
                    {" "}
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* mobile view  */}
        {menu && (
          <div>
            {menu && (
              <ul className="navList-mobile">
                {Menueitems.map((item, index) => {
                  return (
                    <li>
                      <a className="CName" href={item.url} key={index}>
                        {" "}
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}
