import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventRow extends Component {

    render() {

        let event = this.props.event
        let displayDate = event.date.substring(0,10)

        return(
            <>
                        {/* <th>Event Name</th>
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
                        <th>Notes</th> */}
                <tr>
                    <td>{event.event_name}</td>
                    <td>{event.org_name}</td>
                    <td>{event.contact_name}</td>
                    <td>{event.date.substring(0,10)}</td>
                    <td>{event.start_time}</td>
                    <td>{event.end_time}</td>
                    <td>{event.books_in}</td>
                    <td>{event.books_out}</td>
                    <td>{event.number_of_children}</td>
                    <td>{event.location}</td>
                    <td>{event.volunteers}</td>
                    <td>{event.notes}</td>
                </tr>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(EventRow)