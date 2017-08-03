import React from 'react';

import Auth from '../modules/Auth';

// import authCheck from '../../server/middleware/auth-check';

import ClientDash from '../components/ClientDash.jsx';
class ClientDashPage extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              secretData: '',
              email: '',
              name: '',
              registered: null,
              employee: null
          };
      }
    componentDidMount() {
        var received = this.props.location.state;
        console.log(received);
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
        xhr.open('post', '/auth/client');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log(xhr.response);
                this.setState({
                    secretData: xhr.response.message,
                    name: xhr.response.name,
                    email: xhr.response.email,
                    registered: xhr.response.registered,
                    employee: xhr.response.employee,
                    payload:xhr.response.payload
                });
            }
        });
        xhr.send();
    }

    /**
     * Render the component.
     */
    render() {
        return (<ClientDash secretData={this.state.secretData} name={this.state.name} email={this.state.email} registered={this.state.registered} />);
    }

}

export default ClientDashPage;