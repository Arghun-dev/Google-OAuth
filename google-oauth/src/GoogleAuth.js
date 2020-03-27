import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '725154706985-f9hp80v6uh7a6p2o86cghbmmp88k4une.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstacne();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        })
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if(this.state.isSignedIn === true) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;