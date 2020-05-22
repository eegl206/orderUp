import React from "react";
import './style.css'

class LoginBtn extends React.Component {
    render() {
        return (
            <div className="login">
                <h5>Restaurant Login</h5>
                <button onClick={this.handleClick} className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">vpn_key</i>
                </button>
            </div>
        );
    }

    handleClick = () => {
        console.log("Login button clicked");
    }
}

export default LoginBtn;