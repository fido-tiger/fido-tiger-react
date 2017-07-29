import React from 'react';
import Auth from '../modules/Auth';
import ClientDash from '../components/ClientDash.jsx';

class ClientDashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secretData: ''
    };
  }
    componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/auth/client');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<ClientDash secretData={this.state.secretData} />);
  }

}

export default ClientDashPage;