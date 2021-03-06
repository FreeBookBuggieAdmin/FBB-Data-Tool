import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventRow from '../EventRow/EventRow';
import './EditEvents.css';

class EditEvents extends Component {

    state = {

    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_EVENTS'
        })
        this.props.dispatch({
            type: 'GET_ORGANIZATIONS'
        })
        this.props.dispatch({
            type: 'GET_CONTACTS'
        })
    }

    render() {
        // console.log('events:', this.props.reduxStore.events)

        return(
            <div className='container'>
                <h1>Edit Events</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
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
                            <th className='notesColumn'>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.events.map((event, i) => {
                            console.log(event)
                            return (
                                <EventRow key={i} event={event}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(EditEvents)