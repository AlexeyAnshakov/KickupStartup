import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';
import IdeaInviteCollaborator from '../../../components/ideas/IdeaInviteCollaborator';

export default class DraftTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleDraftChange = this.handleDraftChange.bind(this);
    this.handleDraftChange = _.debounce(this.handleDraftChange, 2000);
  }
  handleDraftChange(draft) {
    const idea = this.props.idea;
    Meteor.call("idea.update.draft", idea._id, draft, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4><T>ideas.tabs.draft.alert.header</T></h4>
          <p><T>ideas.tabs.draft.alert.text</T></p>
        </div>
        <IdeaInviteCollaborator idea={this.props.idea} />
        <ListDivider border={true} />
        <div className="white card row-border clearfix">
          <i className="fa fa-lock fa-sm card-top-icon pull-right tooltipped" data-position="left" data-delay="50" data-tooltip="Not publicly visible"></i>
          <h3>Наброски</h3>
          <LiveEditor
            onChange={this.handleDraftChange}
            value={this.props.idea.draft}
            placeholder={i18n.__('ideas.tabs.draft.placeholder')} />
        </div>
      </div>
    )
  }
}
