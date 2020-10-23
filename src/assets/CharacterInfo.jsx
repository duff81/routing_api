import React, {Component} from "react"
import { Link } from 'react-router-dom'


class CharacterInfo extends Component{
    constructor (props){
        super(props) 
            this.state= {
                people:{}
            }
            
        }

        componentDidMount () {
            fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then (res => res.json())
            .then (people=>this.setState({ people }))
            .catch (err=> console.log(err));
        }
        render() {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.people.name}</h5>
                        <h6 className="card-subtitle">{this.state.people.gender}</h6>
                        <p className="card-text">{this.state.people.age}</p>
                        <Link className="button" to={"/people"}>Go back</Link>
                    
                    </div>
                </div>
            )
        }
    }

export default CharacterInfo