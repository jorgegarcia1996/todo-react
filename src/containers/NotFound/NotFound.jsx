import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <h1 className="message">404 Page Not Found</h1>
        <h3>
          <Link to="/todo-react">Return to home page</Link>
        </h3>
      </div>
    );
  }
}

export default NotFound;
