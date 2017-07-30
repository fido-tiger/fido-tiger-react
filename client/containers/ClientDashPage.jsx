import React from 'react';
import Auth from '../modules/Auth';
// import authCheck from '../../server/middleware/auth-check';

import ClientDash from '../components/ClientDash.jsx';

class ClientDashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secretData: '',
            email: this.props.location.state.email,
            name: this.props.location.state.name
        };
    }
    componentWillMount() {
        var received = this.props.location.state;
        console.log(received);
        /* XHR formData
        ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
        const email = encodeURIComponent(this.props.location.state.email);
        const name = encodeURIComponent(this.props.location.state.name);
        const formData = `email=${email}&name=${name}`;
        /* XHR Request
        ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/client');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log(xhr.response);
                this.setState({
                    secretData: xhr.response.message
                });
            }
        });
        xhr.send(formData);
    }

    /**
     * Render the component.
     */
    render() {
        return (<ClientDash secretData={this.state.secretData} name={this.state.name} email={this.state.email} />);
    }

}

export default ClientDashPage;