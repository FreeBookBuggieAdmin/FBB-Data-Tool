import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventRow from '../EventRow/EventRow';
import './EditEvents.css';

class EditEvents extends Component {

    state = {

    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_EVENTS',
        })
    }

    render() {
        return(
            <>
                <h1>edit events page</h1>
                <table>
                    <tr>
                        <th className="eventTitle">Event Name</th>
                        <th>Organization Name</th>
                        <th>Contact Name</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Books Recieved</th>
                        <th>Books Distributed</th>
                        <th>Number of Children</th>
                        <th>Location</th>
                        <th>Volunteers</th>
                        <th>Notes</th>
                    </tr>
                    {this.props.reduxStore.events.map((event, i) => {
                        return <EventRow key={i} event={event}/>
                    })}
                </table>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(EditEvents)