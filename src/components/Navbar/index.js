import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">
                        OrderUp<span role="img" aria-label="shortcake">🍰</span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;