import React, { Component } from 'react';
import QuoteandAuthor from './QuoteandAuthor';
import quotes from './quotes';


class App extends Component {
    constructor(){
        super();
        this.state = {
            quote : quotes[0].quote,
            author : quotes[0].author
           };   
    }

    randomdisplay(){
        const randomNumber = Math.floor(Math.random() * quotes.length)
        return quotes[randomNumber];
    }
    
    shuffleQuotes(array){
        return array.sort(()=>Math.random()-0.5);
    }

    handleClick= () => {
        const generaterandomquote = this.randomdisplay();
        this.setState({
            quote : generaterandomquote.quote,
            author : generaterandomquote.author
        });
        this.shuffleQuotes(quotes);
    };

    randomColor(){
        const color = `rgb(
            ${Math.floor(Math.random() * 155)},
            ${Math.floor(Math.random() * 155)},
            ${Math.floor(Math.random() * 155)}
        )`;
        return color;
    }
    
    render() {
        return (
            <div>
                <QuoteandAuthor
                displayquotes = {this.randomColor}
                handleClick = {this.handleClick}
                {...this.state}
                />
            </div>
        );
    }
}

export default App;