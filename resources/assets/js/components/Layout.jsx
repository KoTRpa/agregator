import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './partials/Navigation';
import Categories from './categories/Categories';

export default class Layout extends Component {
    render() {
        const { location } = this.props;
        
        return(
            <div>
                <Navigation location={ location } />
                <Categories />
            </div>
        );
    }
}