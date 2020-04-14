import React from 'react';

class Searchbar extends React.Component{
    state = {
     term : ''
    }

    onSubmitChange = event =>{
     event.preventDefault();

     this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onSubmitChange} className="ui form">
                    <div className="field">
                    <label><h1>Image Search</h1></label>
                    <input type="text" value={this.state.term} onChange={(e)=> {this.setState({term: e.target.value})}}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;