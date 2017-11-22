import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        
        return (
            <BrowserRouter>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="navbar-header">
                        <button type="button" className={ "navbar-toggle " + navClass } onClick={ this.toggleCollapse.bind(this) }>
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <NavLink exact to="/" className="navbar-brand">Agregator</NavLink>
                    </div>

                    <div className={ "navbar-collapse " + navClass } id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown ">
                                <NavLink exact to="/categories" onClick={ this.toggleCollapse.bind(this) }>Categories</NavLink>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink exact to="/user" onClick={ this.toggleCollapse.bind(this) }>User</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </BrowserRouter>
        );
    }
}
