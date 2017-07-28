import React from 'react';


import Auth from '../modules/Auth';
import ClientDash from '../components/ClientDash.jsx';

class ClientDashPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    componentDidMount() {
        if (Auth.isUserAuthenticated) {
          console.log('MOUNTED');
            const xhr = new XMLHttpRequest();
            xhr.open('get', '/api/client');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // set the authorization HTTP header
            xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                console.log('XHR: ' + xhr);
                if (xhr) {
                    this.setState({
                        data: xhr.response.message
                    });
                }
            });
            xhr.send();
        }
    }

    /**
     * Render the component.
     */
    render() {
        return (<ClientDash data={this.state.data}/>);
    }

}

export default ClientDashPage;