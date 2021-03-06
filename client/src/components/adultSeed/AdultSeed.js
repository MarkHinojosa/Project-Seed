import React, { Component } from 'react';
import './adultSeed.css'
import { Link } from "react-router-dom";

class AdultSeed extends Component {

  componentDidMount() {
    this.props.loadAdultSeed(this.props.match.params.id);
  }

  render() {
    const { title, body, image, likes } = this.props.seed.adultSeed;

    return (
      <div className="adult-seed-container" >
        <nav className="adult-seed-nav">
          <nav1>
            <Link to="/"><button value="child" className="home-btn">Home</button></Link>
            <Link to="/adult"><button value="child" className="list-btn">List</button></Link>
            <Link to="/contribute"><button value="child" className="contribute-btn">Contribute</button></Link>
          </nav1>
        </nav>
        <article>
          <h1 className="adult-seed-title">{title}</h1>
          <img id="adult-seed-img" src={image} alt="" />
          <p>{body}</p>
          <div>Likes: {likes}</div>
        </article>
      </div>
    )
  }
}

export default AdultSeed;