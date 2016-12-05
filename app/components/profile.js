import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProfile } from '../actions/index';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.props.fetchProfile();
    }

    render() {
        return (
            <div>Foonkie</div>
        );
    }
}

function mapStateToProps(state) {

    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProfile }, dispatch)
}

export default connect(null,mapDispatchToProps)(Profile);
