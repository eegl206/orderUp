import React from "react";

class LoginBtn extends React.Component {
    render() {
        return (
            <>
                <h5>Restaurant Login</h5>
                <button onClick={this.handleClick} className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">vpn_key</i>
                </button>
            </>
        );
    }

    handleClick = () => {
        console.log("Login button clicked");
    }
}

export default LoginBtn;