import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

let Home = () => {
  return (
    <React.Fragment>
      <div style={{display: 'flex', justifyContent: 'center'}} >
          <div>
        <h1>Ghibli-Wiki</h1>
        <h2> 
ジブリウィキ</h2>
        <img src={logo} alt="studio ghibli log-big monster" />
        <div></div>

        <Link to="/">
          <button className="m-2 shadow" type="button">HOME</button>
        </Link>

        <Link to="/films">
          <button className="m-2" type="button">Films</button>
        </Link>

        <Link to="/people">
          <button className="m-2" type="button">Characters</button>
        </Link>
      </div></div>
    </React.Fragment>
  );
};

export default Home;
