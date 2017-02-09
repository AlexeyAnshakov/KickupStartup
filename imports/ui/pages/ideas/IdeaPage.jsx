import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';
import { browserHistory } from 'react-router';

import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

import IdeaView from '../../components/ideas/IdeaView';
import IdeaEdit from '../../components/ideas/IdeaEdit';
import IdeaPoll from '../../components/ideas/IdeaPoll';
import Comments from '../../components/comments/Comments';

import Person from '../../../api/people/Person';
import Comment from '../../../api/comments/Comment';
import { FormStep } from '../../../api/ideas/Idea';

export default class IdeaPage extends Component {
  componentDidMount() {
    $("#backButtonMenu").removeClass('hidden');
  }
  componentWillUnmount() {
    $("#backButtonMenu").addClass('hidden');
  }
  getIdeaAuthor(userId) {
    return Person.findOne({userId: userId});
  }
  getCommentsCount(idea) {
    return Comment.find({ideaId: idea._id}).count();
  }
  render() {
    const idea = this.props.idea;

    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      if (!idea) {
        // there is no such idea found in the database - show ideas instead
        browserHistory.push('/ideas');
      }
      if (idea.userId === Meteor.userId() && idea.step !== FormStep.DONE) {
        return (
          <IdeaEdit idea={idea} author={this.getIdeaAuthor(idea.userId)}/>
        );
      } else {
        return (
          <div className="container main">
            <IdeaView idea={this.props.idea}
              author={this.getIdeaAuthor(this.props.idea.userId)}
              commentsCount={this.getCommentsCount(this.props.idea)}
              lastCommentTime={this.props.lastComment ? this.props.lastComment[0] : ''} />
            <ListDivider border={true} />
            <IdeaPoll idea={idea} />
            <ListDivider border={true} />
            <Comments idea={idea} comments={this.props.comments} />
            <ListEnd/>
          </div>
        );
      }
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  idea: PropTypes.object,
  user: PropTypes.object
}
