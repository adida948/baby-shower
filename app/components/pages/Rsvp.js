import React, { Component } from "react";
import API from "../../utils/API";

class Rsvp extends Component {
    constructor() {
      super();
      this.state = {
        inputNameValue: "",
        inputNumValue: ""
    };
      
    }
 
    render() {          

        return (
            <div>
                <div className="w3-container w3-center w3-wide bgimg w3-display-middle padding-200">
                        <h2>HOPE YOU CAN MAKE IT!</h2>

                        <h3 >Kindly Respond By September 18th,2020</h3>
                        <div className="w3-content">
                        <h3>Sincerely, Danilo & Tatiana</h3>
                        </div>
                </div>
            </div>

        );
    }
}
export default Rsvp;