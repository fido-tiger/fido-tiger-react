import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../modules/Auth';



// import authCheck from '../../server/middleware/auth-check';

import JobBoard from '../components/JobBoard.jsx';
class JobBoardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            selected: [],
            secretData: '',
            email: '',
            name: '',
            registered: null,
            employee: null
        };
        this.setSelected = this.setSelected.bind(this);
        this.processForm = this.processForm.bind(this);
    }

   componentDidMount() {
    console.log(this.state);
/*        let token = Auth.getToken();
    let decoded = jwt.decode(token,{complete:true});
    console.log(decoded.payload);*/
    /* XHR formData
    ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/

/*       const email = encodeURIComponent(this.props.location.state.email);
    const name = encodeURIComponent(this.props.location.state.name);
    const formData = `email=${email}&name=${name}`;*/
    /* XHR Request
    ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/auth/jobboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            this.setState({
                secretData: xhr.response.message,
                name: xhr.response.name,
                email: xhr.response.email,
                registered: xhr.response.registered,
                employee: xhr.response.employee,
                jobs:xhr.response.jobs
            });

            console.log(this.state)
        }
    });
    xhr.send();
    
    }

    processForm(event) {
        event.prevetDefault();
        console.log(this.state);
        
        const email = encodeURIComponent(this.state.email);
        const selected = encodeURIComponent(this.state.selected);
        const formData = `email=${email}&selected=${selected}`;
    /* XHR Request
    ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/jobboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {

                this.setState({
                    errors: {},
                    secretData: xhr.response.message,
                    name: xhr.response.name,
                    email: xhr.response.email,
                    registered: xhr.response.registered,
                    employee: xhr.response.employee,
                    jobs:xhr.response.jobs
                });

                // localStorage.setItem('successMessage'), xhr.response.message);

                console.log(this.context);
                // this.context.router.history.push('/client');

            } else {
                console.log(xhr.response.errors);

                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
    xhr.send(formData);
        

      


    }

    setSelected(selected) {
       this.setState({ selected: selected });
    }

    componentDidUpdate(prevProps, prevState) {
        
    }
    /**
     * Render the component.
     */
    render() {

        // const jobs = this.props.jobs.map(function(jobs,index){
        //     return <Job key={index} name={jobs}/>
        // });
        
        return (
            <JobBoard 
                jobs={this.state.jobs} 
                secretData={this.state.secretData} 
                name={this.state.name} 
                email={this.state.email} 
                registered={this.state.registered} 
                selected={this.state.selected}
                setSelected={this.setSelected}
                onSubmit={this.processForm} 
            />
        );
    }

}

export default JobBoardPage;