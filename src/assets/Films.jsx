import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.films.map((film) => {
      return (
        <div key={film.id} className="card">
          <div className="card-body">
           <h5 className="card-title">{film.title}</h5>
            <h6 className="card-subtitle ">{film.director}</h6>
            <Link to={`/films/${film.id}`} className="card-link">
              more info
            </Link>
          </div>
        </div>
      );
    });
  }
}
export default Films;
