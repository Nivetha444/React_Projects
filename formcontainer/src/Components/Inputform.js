import React from "react";

class Inputform extends React.Component {
    constructor(props){
        super(props);

        this.state={
            fname:'',
            sname:'',
            age:null,
            gender:'',
            destination:'',
            nuts:false,
            lact:false,
            vegan:false,
            errors:{
               fname:'',
               sname:'',
               age:''
            }
        }
    }

    onTextChange =(event) =>{
        let details=event.target.name; 
        let val=event.target.value;
        let checked= event.target.checked;
        let type= event.target.type;
        type ==="checkbox" ? this.setState({[details]: checked}) : this.setState({[details]: val})

    }

    // onClickItem = (event) => {
    //    let names = event.target.name;

    // }
    
  render() {
    return (
      <div>
        <div className="headings" style={{ marginTop: "20px", color: "teal" }}>
          <h2>Input Form</h2>
        </div>
        <div className="ui segment">
          <form className="ui form">
            <div className="field">
              <label>First Name:</label>
              <input type="text" name="fname" placeholder="first Name" onClick={this.onClickItem} onChange={this.onTextChange}/>
            </div>
            <div className="field">
              <label>Last Name:</label>
              <input type="text" name="sname" placeholder="last Name" onClick={this.onClickItem} onChange={this.onTextChange}/>
            </div>
            <div className="field">
              <label>Age:</label>
              <input type="text" name="age" placeholder="Age" onChange={this.onTextChange}/>
            </div>
            <label>Please select your Gender:</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="gender" value="male" onChange={this.onTextChange} />
                <label>Male</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="gender" value="female" onChange={this.onTextChange} />
                <label>Female</label>
              </div>
            </div>
            <div className="field">
              <select className="ui fluid search dropdown" name="destination" onChange={this.onTextChange}>
                <option value="">Select your Destination</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
              </select>
            </div>
            <div className="field">
              <label>Dietery Restrictions</label>
              <div class="ui checkbox">
                <input type="checkbox" name="nuts" checked={this.state.nuts} onChange={this.onTextChange} />
                <label>Nuts Free</label>
              </div>
            </div>
            <div className="field">
              <div class="ui checkbox">
                <input type="checkbox" name="lact" checked={this.state.lact} onChange={this.onTextChange}/>
                <label>Lactose Free</label>
              </div>
            </div>
            <div className="field">
              <div class="ui checkbox">
                <input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.onTextChange} />
                <label>Vegan</label>
              </div>
            </div>
            <div className="field">
              <button class="ui secondary button">Submit</button>
            </div>
          </form>
        </div>
        <div>
        <div className="headings" style={{ marginTop: "20px", color: "teal" }}>
          <h2>Output Form</h2>
        </div>
      <form className="ui form">
    <p>Your First Name: {this.state.fname}</p>
    <p>Your Second Name: {this.state.sname}</p>
    <p>Your Age: {this.state.age}</p>
    <p>Selected value: {this.state.gender}</p>
    <p>Destination is: {this.state.destination}</p>
    <div className="restrict">
    <span>Nuts: {this.state.nuts? "Yes": "No"}</span>
    <span>Lactose: {this.state.lact? "Yes": "No"}</span>
    <span>Vegan: {this.state.vegan? "Yes": "No"}</span>
    </div>
      </form>
      </div>
      </div>
    );
  }
}

export default Inputform;
