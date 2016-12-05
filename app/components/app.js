import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-sm-9 offset-sm-3 col-md-11 offset-md-1 main">
                            {this.props.children}
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
