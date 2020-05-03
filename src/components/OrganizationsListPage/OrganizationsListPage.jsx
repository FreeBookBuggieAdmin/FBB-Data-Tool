import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import OrganizationsListItem from '../OrganizationsListItem/OrganizationsListItem'

import { 
    withStyles, 
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
 } 
    from '@material-ui/core'

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
    }
}

class OrganizationsListPage extends React.Component {
    state = {
        searchQuery: "",
    }

    async componentDidMount() {
        this.props.dispatch({
            type: 'GET_ORGANIZATIONS'
        })
        this.props.dispatch({
            type: 'FETCH_COUNTIES'
        })
    }

    onInputChange = (event) => {
        this.setState({ searchQuery: event.target.value.toLowerCase() })
    }

    render() {
        let searchQuery = this.state.searchQuery
        const filteredList = this.props.reduxStore.organizations.filter(
            organization => organization.org_name.toLowerCase().includes(searchQuery) ||
                organization.city.toLowerCase().includes(searchQuery) ||
                organization.county_name.toLowerCase().includes(searchQuery)
        )

        let displayList
        if (filteredList.length === 0) {
            displayList = ('No results')
        } else {
            displayList = (
                filteredList.map(org =>
                    <OrganizationsListItem key={org.id} org={org} />
                )
            )
        }
        return (
            <div className="org-list-page">
                <div className="org-list-page-bg"></div>
                    <Grid container
                        justify="center"
                        alignItems="center"
                        className={this.props.classes.searchBar}
                        style={{ fontSize: '34px' }}>
                        <span>Search for an organization by name, city or county: </span>
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
                    alignItems="center"
                >
                    {displayList}
                </Grid>
                    <Table size="small" aria-label="organization table" className={this.props.classes.table}
                        fixedHeader={false} style={{ width: "auto", tableLayout: 'auto' }}>
                        <TableHead>
                            <TableRow className={this.props.classes.tableHead}>
                                <TableCell style={{ fontSize: '24px', width: "25%" }} colSpan={2} >Organization Name</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "27.5%" }}>Address</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "10%" }}>City</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "2.5%" }}>State</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "5%" }}>Zip</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "10%" }}>County</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "10%" }}>Notes</TableCell>
                                <TableCell style={{ fontSize: '24px', width: "5%" }}></TableCell>
                                <TableCell style={{ fontSize: '24px', width: "5%" }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayList}
                        </TableBody>
                    </Table>
                </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

const styledOrganizationsListPage = withStyles(styles)(OrganizationsListPage)

export default connect(mapStateToProps)(styledOrganizationsListPage)