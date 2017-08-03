import React from 'react';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';
// Material UI
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import List, { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';



/*    CSS
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
const homeCardStyle = {
    width: '97%',
    margin: '15px',
    padding: '7px',
    textAlign: 'left'

};
const avatarStyle = {
    margin: '5px'
};

/*    Conditional
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
// const isRegistered = props.registered;
/*    Component
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
// const JobBoard = ({secretData, name, email, registered}) => (
class JobBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            selected: [],
            secretData: '',
            name: '',
            email: '',
            registered: null,
            employee: null
        };

    }
    componentDidMount() {
        console.log(this.props);
        this.setState({
            
            jobs: this.props.jobs,
            email: this.props.email
        });
    }

    isSelected = (index) => {

      return this.props.selected.indexOf(index) !== -1;
    }

    handleRowSelection = (selectedRows) => {
      this.props.setSelected(selectedRows);
        this.setState({
            selected: selectedRows
        });
        
    }

    renderJob = (job) => {
      let select = this;
        return this.props.jobs.map(function(job, index) {
            return (
              <TableRow striped={true} key={job.id} selected={select.isSelected(index)} >
                <TableRowColumn>{job.id}</TableRowColumn>
                <TableRowColumn>{job.pet_name}</TableRowColumn>
                <TableRowColumn>{job.start_date}</TableRowColumn>
                <TableRowColumn>{job.start_time}</TableRowColumn>
                <TableRowColumn>{job.end_date}</TableRowColumn>
                <TableRowColumn>{job.end_time}</TableRowColumn>
                <TableRowColumn>{job.event_notes}</TableRowColumn>
              </TableRow>
            )
        });
    }


    render() {

        return (
            <div>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="Job Board"/>    
    <div className="col-sm-8"> 
     <List>
    {this.props.email && <ListItem
    disabled={true}
    leftAvatar={<Avatar>{this.props.name[0]}</Avatar>}
    >
    {this.props.name}{this.props.email}{`${this.props.registered}`}
    </ListItem>  }
       {this.props.secretData && <CardText>{this.props.secretData}{this.props.name}</CardText>}
    </List>
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
      <form onSubmit={this.props.onSubmit}>
        <Table onRowSelection={this.handleRowSelection}>
        <TableHeader multiSelectable={true} >
          <TableRow>
            <TableHeaderColumn>Job ID</TableHeaderColumn>
            <TableHeaderColumn>Pet Name</TableHeaderColumn>
            <TableHeaderColumn>Start Date</TableHeaderColumn>
            <TableHeaderColumn>Start Time</TableHeaderColumn>
            <TableHeaderColumn>End Date</TableHeaderColumn>
            <TableHeaderColumn>End Time</TableHeaderColumn>
            <TableHeaderColumn>Client Notes</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/*Render Job Components*/}
          {this.renderJob()}
        </TableBody>
        </Table>
        <FlatButton formAction="/" type="submit" label="Submit" primary />
      </form>
  </Card>
  </div>
        );
    }
}
JobBoard.propTypes = {
    jobs: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    secretData: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    registered: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired
};

export default JobBoard;