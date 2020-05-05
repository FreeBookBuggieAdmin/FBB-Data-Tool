import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI imports
import {
    withStyles,
    Button,
    Grid,
    Paper,
    TextField,
    Select,
    InputLabel,
    FormControl,
}
    from '@material-ui/core';

const styles = theme => ({

    container: {
        minHeight: '400px'
    },
    form: {
        minWidth: '750px',
        maxWidth: '1000px',
        minHeight: '400px',
        display: 'block',
        justify: 'center',
        alignItems: 'center',
        padding: '10px'
    },
    line: {
        padding: '25px',
        margin: '10px',
        fontSize: '20px'
    },
    inputs: {
        width: '250px',
        padding: '25px',
        margin: '10px',
        backgroundColor: 'white',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '400px',
    },
    dropdown: {
        width: '250px',
        padding: '25px',
        margin: '10px',
        backgroundColor: 'white',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '400px'
    },
    notes: {
        width: '400px',
        padding: '25px',
        margin: '10px',
    },
    button: {
        width: '100px',
        margin: '20px',
        justify: 'center'
    },
    resize: {
        fontSize: '500'
    },
});

class volunteerEvent extends Component {

    state = {
        event_name: this.props.reduxStore.events[0].event_name,
        organizations_id: this.props.reduxStore.events[0].organizations_id,
        date: this.props.reduxStore.events[0].date,
        contacts_id: 0,
        collectBooks: 0,
        distBooks: 0,
        numOfKids: 0,
        notes: '',
    }

    // get all events on page load
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_EVENTS',
        })
    }

    // submit event handler
    addData = (event) => {
        event.preventDefault();
        this.props.dispatch({
            // set up new saga for dispatch type
            type: 'VOLUNTEER_EVENT',
            payload: this.state
        })
        this.setState({
            event_name: '',
            organizations_id: 0,
            date: '',
            contacts_id: 0,
            collectBooks: 0,
            distBooks: 0,
            numOfKids: 0,
            notes: '',
        })
        alert('Books Successfully Added!')
    };

    clearFields = (event) => {
        // event.preventDefault()
        this.setState({
            event_name: '',
            organizations_id: 0,
            date: '',
            contacts_id: 0,
            collectBooks: 0,
            distBooks: 0,
            numOfKids: 0,
            notes: '',
        })
        alert('Inputs Cleared!')
    };

    handleInputChangeFor = (event, propertyName) => {

        this.setState({
            [propertyName]: event.target.value
        })
    };

    handleEventChange = (event) => {

        const currentDate = this.getCurrentDate()

        if (event.target.value === 'select') {
            return
        } else if (event.target.value === 0) {
            this.setState({
                event_name: this.props.reduxStore.events[event.target.value].event_name,
                organizations_id: this.props.reduxStore.events[event.target.value].organizations_id,
                date: currentDate,
                contacts_id: this.props.reduxStore.events[event.target.value].contacts_id,
                start_time: this.props.reduxStore.events[event.target.value].start_time,
                end_time: this.props.reduxStore.events[event.target.value].end_time
            })
        } else {
            this.setState({
                event_name: this.props.reduxStore.events[event.target.value].event_name,
                organizations_id: this.props.reduxStore.events[event.target.value].organizations_id,
                date: this.props.reduxStore.events[event.target.value].date,
                contacts_id: this.props.reduxStore.events[event.target.value].contacts_id,
                start_time: this.props.reduxStore.events[event.target.value].start_time,
                end_time: this.props.reduxStore.events[event.target.value].end_time
            })
        }
    }

    getCurrentDate() {
        let today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = yyyy+'-'+mm+'-'+dd;
        return today
    }

    render() {

        let eventList =
            <>
                <option value='select' className={this.props.classes.dropdown}>select</option>
                {this.props.reduxStore.events.map((event, i) =>
                    <option value={i} key={i} className={this.props.classes.dropdown}>{event.event_name}</option>
                )}
            </>

        return (
            <div className="new-event-page">
                <h1
                    className="new-event-styles"
                    align="center">Add Books By Event</h1>
                <div className="new-event-page-bg"></div>
                <Grid className={this.props.classes.container}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        container
                        className={this.props.classes.form}
                        item lg={4}
                        justify="center"
                    >
                <Paper
                    elevation={5}
                    disableTypography={true}
                >
                    <span className={this.props.classes.line}>
                        <FormControl className={this.props.classes.inputs} >
                            <InputLabel>Event Name</InputLabel>
                            <Select
                                native
                                className={this.props.classes.dropdownItem}
                                onChange={(event) => this.handleEventChange(event)}>
                                >
                                        {eventList}
                            </Select>
                        </FormControl>

                        <div className="textFieldDiv">
                            <TextField
                                className={this.props.classes.inputs}
                                value={this.state.collectBooks}
                                type="number"
                                label="Books Collected"
                                margin="normal"
                                onChange={(event) => this.handleInputChangeFor(event, 'collectBooks')}
                                InputProps={{
                                    classes: {
                                        input: styles.resize,
                                    },
                                }}
                            />
                           

                            <TextField
                                className={this.props.classes.inputs}
                                value={this.state.distBooks}
                                type="number"
                                label="Books Distributed"
                                margin="normal"
                                onChange={(event) => this.handleInputChangeFor(event, 'distBooks')}
                            />
                            
                            <TextField
                                className={this.props.classes.inputs}
                                value={this.state.numOfKids}
                                type="number"
                                label="Number of Children"
                                margin="normal"
                                onChange={(event) => this.handleInputChangeFor(event, 'numOfKids')}
                            />
                            
                            <TextField
                                className={this.props.classes.inputs}
                                alignItems="center"
                                value={this.state.notes}
                                type="text"
                                label="Notes"
                                onChange={(event) => this.handleInputChangeFor(event, 'notes')}
                            />
                        </div>

                        <Button
                            className={this.props.classes.button}
                            onClick={this.clearFields}
                            color="primary">
                            Cancel
                                </Button>
                        <Button
                            className={this.props.classes.button}
                            onClick={this.addData}
                            color="primary">
                            Submit
                                </Button>
                    </span>
                </Paper>
            </Grid>
        </Grid>
                <Button
                    className={this.props.classes.button}
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.history.push('/home')}>
                    Home</Button>
            </div>
            
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(withStyles(styles)(volunteerEvent));