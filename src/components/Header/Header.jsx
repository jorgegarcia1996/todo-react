import React from "react";
import "./Header.css";
import { AddButton, ReturnButton } from '../../components';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1 className="title">{this.props.headerText}</h1>
        <span className="button">
        {this.selectButton()}
        </span>
      </div>
    );
  }
  
  selectButton = () => {
    switch(this.props.button) {
      case "add":
        return <AddButton />;
      case "return":
        return <ReturnButton />
        case "none":
          break;
      default:
        break;
    }
    
  }
}

export default Header;
