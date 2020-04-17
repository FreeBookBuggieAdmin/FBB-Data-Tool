import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventRow extends Component {

    state = {
        event: this.props.event,
        edit: false
    }

    handleEdit = () => {
        console.log(this.state.event)
        this.setState({
            edit: true
        })
    }

    handleSave = () => {
        console.log(this.state.event)
        // dispatchEvent({
        //     type: 'EDIT_EVENT',
        //     payload: this.state.event
        // })
        this.setState({
            edit: false
        })
    }

    handleCancel = () => {
        this.setState({
            event: this.props.event,
            edit: false
        })
    }

    handleChangeFor = (event, property) => {
        console.log('in handleChangeFor', property)
        console.log(event.target.value)

        if (property === 'org_name') {
            console.log('redux organizations:', this.props.reduxStore.organizations)
            console.log('index:', event.target.value)
            let org = JSON.parse(event.target.value)
            this.setState({
                event: {
                    ...this.state.event,
                    organizations_id: org.id,
                    [property]: org.org_name //make sure this index works. It probably doesn't
                }
            })
        } else if (property === 'contact_name') {
            console.log('redux contacts:', this.props.reduxStore.contacts)
            let contact = JSON.parse(event.target.value)
            this.setState({
                event: {
                    ...this.state.event,
                    contacts_id: contact.id,
                    [property]: contact.contact_name //same here
                }
            })
        } else {
            this.setState({
                event: {
                    ...this.state.event,
                    [property]: event.target.value
                }
            })
        }
    }

    render() {

        let event = this.state.event

        if (this.state.edit) {
            return (
                <>
                    <tr>
                        <td><input value={event.event_name} onChange={(event, property) => this.handleChangeFor(event, 'event_name')}/></td>
                        <td>
                            <select value={JSON.stringify({id: event.organizations_id, org_name: event.org_name})} onChange={(event, property) => this.handleChangeFor(event, 'org_name')}>
                                {this.props.reduxStore.organizations.map((org) => {
                                    return <option value={JSON.stringify({id: org.id, org_name: org.org_name})}>{org.org_name}</option>
                                })}
                            </select>
                        </td> 
                        <td>
                            <select value={JSON.stringify({id: event.contacts_id, contact_name: event.contact_name})} onChange={(event, property) => this.handleChangeFor(event, 'contact_name')}>
                                {this.props.reduxStore.contacts.map((contact) => {
                                    return <option value={JSON.stringify({id: contact.id, contact_name: contact.contact_name})}>{contact.contact_name}</option>
                                })}
                            </select>
                        </td>
                        <td><input type='date' value={event.date.substring(0,10)} onChange={(event, property) => this.handleChangeFor(event, 'date')}/></td>
                        <td><input value={event.start_time} onChange={(event, property) => this.handleChangeFor(event, 'start_time')}/></td>
                        <td><input value={event.end_time} onChange={(event, property) => this.handleChangeFor(event, 'end_time')}/></td>
                        <td><input value={event.books_in} onChange={(event, property) => this.handleChangeFor(event, 'books_in')}/></td>
                        <td><input value={event.books_out} onChange={(event, property) => this.handleChangeFor(event, 'books_out')}/></td>
                        <td><input value={event.number_of_children} onChange={(event, property) => this.handleChangeFor(event, 'number_of_children')}/></td>
                        <td><input value={event.location} onChange={(event, property) => this.handleChangeFor(event, 'location')}/></td>
                        <td><input value={event.volunteers} onChange={(event, property) => this.handleChangeFor(event, 'volunteers')}/></td>
                        <td><input value={event.notes} onChange={(event, property) => this.handleChangeFor(event, 'notes')}/></td>
                        <td><button onClick={this.handleSave}>Save</button><button onClick={this.handleCancel}>Cancel</button></td>
                    </tr>
                </>
            )
        }

        return (
            <>
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
                    <td><button onClick={this.handleEdit}>Edit</button></td>
                </tr>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(EventRow)