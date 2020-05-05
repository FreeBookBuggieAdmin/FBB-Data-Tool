import React from 'react';
import { connect } from 'react-redux';
import ContactsListItem from '../ContactsListItem/ContactsListItem';

import { withStyles, 
    Grid,
    Input,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
 } from '@material-ui/core';

const styles = {

    searchBar: {
        paddingTop: '50px',
        textSize: '36px',
        fontFamily: 'Museo Slab',
        opacity: '1'
    },
    input: {
        justify: 'center',
        padding: '10px',
        opacity: '1'
    },
    table: {
        width: '80%',
        marginRight: '15px',
        marginLeft: '35px',
        margin: '2em',
    },
    tableHead: {
        backgroundColor: 'lightGrey',
        fontSize: '34px',
    },
    list: {
        paddingLeft: '25px',
        paddingRight: '25px'
    }
}

class ContactsListPage extends React.Component {

    state = {
        searchQuery: "",
    }
    async componentDidMount() {
        this.props.dispatch({
            type: 'GET_CONTACTS'
        })
    }

    onInputChange = (event) => {
        this.setState({ searchQuery: event.target.value.toLowerCase() })
    }

    render() {
        let searchQuery = this.state.searchQuery
        const filteredList = this.props.reduxStore.contacts.filter(
            contact => contact.org_name.toLowerCase().includes(searchQuery) ||
                contact.contact_name.toLowerCase().includes(searchQuery)
        )

        let displayList

        if (filteredList.length === 0) {
            displayList = ('No results')
        } else {
            displayList = (
                filteredList.map(contact =>
                    <ContactsListItem key={contact.id} contact={contact} />
                )
            )
        }
        return (

            <div className="contact-list-page">
                <div className="contact-list-page-bg"> </div>
            <div>
                {/* <ContactsListPageNav /> */}
                <div className={this.props.classes.background}>

                    <Grid container
                        justify="center"
                        alignItems="center"
                        className={this.props.classes.searchBar}
                        style={{ fontSize: '34px' }}>
                        <span>Search for a contact by name or organization: </span>
                        <Input
                            className={this.props.classes.input}
                            placeholder="search here "
                            onChange={this.onInputChange}
                            value={this.state.searchQuery}>
                        </Input>
                    </Grid>

                    <Grid container
                        className={this.props.classes.list}
                        direction="column"
                        justify="space-evenly"
                        alignItems="center">
                        {displayList}
                    </Grid>
                    <Table size="small" aria-label="contact table" className={this.props.classes.table}
                        fixedHeader={false} style={{ width: "auto", tableLayout: 'auto' }}>
                        <TableHead>
                            <TableRow className={this.props.classes.tableHead}>
                                <TableCell style={{ fontSize: '24px', width: "25%" }} >Contact Name</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "25%" }} >Organization</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "15%" }}>Phone Number</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "15%" }}>email</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "20%" }}>Notes</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "5%" }}></TableCell>
                                <TableCell style={{ fontSize: '24px', width: "5%" }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayList}
                        </TableBody>
                    </Table>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

const styledContactsListPage = withStyles(styles)(ContactsListPage)

export default connect(mapStateToProps)(styledContactsListPage)