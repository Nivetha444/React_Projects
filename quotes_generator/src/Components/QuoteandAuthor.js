import React, { Component } from 'react';
import "./App.css";

class QuoteandAuthor extends Component {
    render() {
    const randomColor = this.props.displayquotes();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor; 

        return (
            <div>
            <div className="head">
            <h1>Random Quote Generator!</h1>
            </div>
            <div style={{backgroundColor :"white"}} className="quotebox">
            <div className="fadeIn" key={Math.random()} style={{color: randomColor}}>
            <h1 id="quote">"{this.props.quote}"</h1>
            <h5 id="author">-{this.props.author ? this.props.author : "unknown"}</h5>
                </div>
                <button id="newquote" style={{backgroundColor: randomColor }} onClick={this.props.handleClick}>New Quote</button>
            </div>
            </div>
        );
    }
}

export default QuoteandAuthor;