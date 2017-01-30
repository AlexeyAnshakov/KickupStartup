import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaProblem extends Component {
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Шаг 4. Чья это проблема? Кто Ваш покупатель?</h3>
        </div>
          <div className="modal-body">
            <div className="form">
              <p>Это поможет нам подобрать для отзывов наиболее подходящую аудиторию:</p>
                <div className="input-field">
                  <select>
                    <option value="" disabled selected>Choose Your Target Market</option>
                    <option value="1">Arts, Entertainment and Hobbies</option>
                    <option value="2">Finance and Business</option>
                    <option value="3">Clothing, Accessories and Shoes</option>
                    <option value="4">Food and Health</option>
                    <option value="5">General Consumer</option>
                    <option value="6">Science and Education</option>
                    <option value="7">Nonprofit</option>
                    <option value="8">Pets and Animals</option>
                    <option value="9">Travel and Sports</option>
                    <option value="10">Technology</option>
                    <option value="11">Home, Family and Gifts</option>
                    <option value="12">Other</option>
                  </select>
                  <select multiple>
                    <option value="" disabled selected>Geographic</option>
                    <option value="1">Africa</option>
                    <option value="2">America</option>
                    <option value="3">Asia</option>
                    <option value="4">Australia</option>
                    <option value="5">Europe</option>
                  </select>
                  <select multiple>
                    <option value="" disabled selected>Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </select>
                  <select multiple>
                    <option value="" disabled selected>Demographic</option>
                    <option value="1">Children</option>
                    <option value="2">Teens</option>
                    <option value="3">Adults</option>
                    <option value="4">Seniors</option>
                  </select>
                </div>
              </div>
          </div>
          <div className="col s12 text-center">
              <button type="submit" className="activator waves-effect waves-light orange accent-3 btn-large btn-margin">
                  <i className="fa fa-bullhorn fa-lg"></i>
                  Ask people for a review
              </button>
              <div className="modal-bottom-link">
                  <a href="#">I need help answering questions</a>
              </div>
          </div>
      </div>
    )
  }
}
