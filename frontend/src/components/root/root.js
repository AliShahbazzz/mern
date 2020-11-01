import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './root.css';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="root-header">
                    <Link to="/"><h2>Header</h2></Link>
                    <div className="root-header-btn">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Root;