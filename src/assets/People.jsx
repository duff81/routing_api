import React, { Component } from "react";
import { Link } from "react-router-dom";
import Films from "./Films"
import Home from "./Home";
import { render } from "@testing-library/react";


class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }
  
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  
    }

  render() {
    return this.state.people.map((people) => {
      return (
        <div key={people.id} className="card">
          <div className="card-body">
      <h5 className="card-title">{people.name}</h5>
            <h6 className="card-subtitle ">{people.title}</h6>
            <Link to={`/people/${people.id}`} className="card-link">
              more info
            </Link>
            
          </div>
        </div>
      );
    });
  }
}
export default People;
