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
            jobs:[],
            secretData: '',
            name: '',
            email: '',
            registered: null,
            employee: null
        };
        this.renderJob = this.renderJob.bind(this);
    }
    componentDidMount() {
      console.log(this.state);
      this.setState({
                jobs: this.props.jobs,
                email: this.props.email
              });
    }
    componentDidUpdate(prevProps, prevState) {
        
       console.log(this.state);
    }
    componentWillUpdate(nextProps, nextState) {
      console.log(nextProps,nextState);
          
    }

    renderJob(job) {
      return this.props.jobs.map(function(job, index) {
        return(
          <TableRow key={index} >
            <TableRowColumn>{index}</TableRowColumn>
            <TableRowColumn>{job.pet_name}</TableRowColumn>
            <TableRowColumn>{job.start_time}</TableRowColumn>
          </TableRow>
          )
      });
    }

    isSelected(index) {
      return this.state.selected.indexOf(index) !== -1;
   };

    handleRowSelection(selectedRows) {
      this.setState({
        selected: selectedRows,
      });
    };

    render() {
      console.log(this.props);
        return (
            <div>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="Job Board"/>    
    <div className="col-sm-8"> 
     <List>
    {this.state.email && <ListItem
    disabled={true}
    leftAvatar={<Avatar>{name[0]}</Avatar>}
    >
    {this.state.name}{this.state.email}{`${this.state.registered}`}
    </ListItem>  }
       {this.state.secretData && <CardText>{this.state.secretData}{this.state.name}</CardText>}
    </List>
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
        <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/*Render Job Components*/}
          {this.renderJob()}
        </TableBody>
        </Table>
  </Card>
  </div>
        );
    }
}
JobBoard.propTypes = {
    jobs: PropTypes.array.isRequired,
    secretData: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    registered: PropTypes.bool.isRequired
};

export default JobBoard;