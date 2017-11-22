import React, { Component } from 'react';

export default class Categories extends Component {

    constructor() {

        super();

        console.log('cat', this.state);
        this.state = {
            categories: [],
        }
    }

    componentDidMount() {

        fetch('/api/categories')
            .then(response => {
                return response.json()
            })
            .then(categories => {
                this.setState({ categories });
            });
    }

    renderCategories() {
        return this.state.categories.map(category => {
            return (
                <li key={ category.id }>{ category.title }</li>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Categories</div>

                            <div className="panel-body">
                                <ul>
                                    { this.renderCategories() }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
