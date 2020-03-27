import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '725154706985-f9hp80v6uh7a6p2o86cghbmmp88k4une.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;