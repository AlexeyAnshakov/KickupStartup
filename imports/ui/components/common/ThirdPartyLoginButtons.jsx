import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class ThirdPartyLoginButtons extends Component {
  // loginWithGithub(e) {
  //   e.preventDefault();
  //   Meteor.loginWithGithub({}, this.afterLogin);
  // }
  // loginWithLinkedIn(e) {
  //   e.preventDefault();
  //   Meteor.loginWithLinkedIn({}, this.afterLogin);
  // }
  loginWithEmail(e) {
    //Meteor.loginWithPassword({}, this.afterLogin);
  }
  loginWithFacebook(e) {
    e.preventDefault();
    Meteor.loginWithFacebook({}, this.afterLogin);
  }
  loginWithVk(e) {
    e.preventDefault();
    Meteor.loginWithVk({ requestPermissions: ['email']}, this.afterLogin);
  }
  loginWithTwitter(e) {
    e.preventDefault();
    Meteor.loginWithTwitter({}, this.afterLogin);
  }
  loginWithGoogle(e) {
    e.preventDefault();
    Meteor.loginWithGoogle({ requestPermissions: ['email']}, this.afterLogin);
  }
  afterLogin(error) {
    if (error) {
      console.log(error);
    }
  }
  render () {
    return (
      <div className="card-footer clearfix right">
        {/* <a href="#!" onClick={this.loginWithEmail.bind(this)} className="waves-effect waves-light orange btn modal-btn">
          <i className="fa fa-envelope fa-lg" title="Email"></i>Email
        </a> */}
        <a href="#!" onClick={this.loginWithGoogle.bind(this)} className="waves-effect waves-light orange btn modal-btn">
          <i className="fa fa-google-plus fa-lg" title="Google+"></i>Google+
        </a>
        <a href="#!" onClick={this.loginWithVk.bind(this)} className="waves-effect waves-light orange btn modal-btn">
          <i className="fa fa-vk fa-lg" title="Vkontakte"></i>Vkontakte
        </a>
        <a href="#!" onClick={this.loginWithFacebook.bind(this)} className="waves-effect waves-light orange btn modal-btn">
          <i className="fa fa-facebook-official fa-lg" title="Facebook"></i>Facebook
        </a>
        <a href="#!" onClick={this.loginWithTwitter.bind(this)} className="waves-effect waves-light orange btn modal-btn">
          <i className="fa fa-twitter fa-lg" title="Twitter"></i>Twitter
        </a>
      </div>
    )
  }
}
