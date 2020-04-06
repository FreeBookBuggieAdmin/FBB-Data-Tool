import React, { Component } from 'react';
import { connect } from 'react-redux';

class DataReporting extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return(
            <>
                <h1>edit events page</h1>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(EditEvents)