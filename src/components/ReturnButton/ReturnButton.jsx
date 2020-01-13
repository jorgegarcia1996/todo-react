import React from 'react';
import './ReturnButton.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

class ReturnButton extends React.Component {
  render() {
    return(
      <div className="ReturnButton">
        <span className="return-icon">
          <Link to="/todo-react">
            <IoIosArrowRoundBack />
          </Link>
        </span>
      </div>
    )
  }
}

export default ReturnButton;