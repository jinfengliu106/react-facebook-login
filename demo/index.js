import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import FacebookLoginWithButton from '../src/facebook-with-button'

const FACEBOOK_API = 'http://localhost:3000/v1/auth/facebook_sign_up';
const FACEBOOK_APP_ID = '482629115691708';

const responseFacebook = (response) => {
  console.log(response);
  fetch(FACEBOOK_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      access_token: response.accessToken,
      user_id: response.id,
    })
  })
  .then( res => res.json() )
  .then( res => console.log(res) );
};

class Base extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Facebook login with default button and styling</p>
          <FacebookLoginWithButton
            appId={FACEBOOK_APP_ID}
            autoLoad
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
  </Router>,
  document.getElementById('demo')
);
