import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import Avatar from 'react-avatar';
import { moment } from 'meteor/momentjs:moment';

import Banner from '../common/Banner';
import ReadOnlyEditor from '../common/ReadOnlyEditor';
import BookmarkIdeaLink from '../ideas/BookmarkIdeaLink';
import ListDivider from './ListDivider';

import Person from '../../../api/people/Person';

export default class ListIdeaCard extends Component {
  constructor(props) {
    super(props);
    this.renderNumberOfCommentsText = this.renderNumberOfCommentsText.bind(this);
  }
  gotoIdeaDetails(e) {
    e.preventDefault();
    this.context.router.push('/idea/' + this.props.idea._id);
    window.scrollTo(0, 0);
  }
  renderLastCommentTime() {
    if (this.props.lastCommentTime) {
      return (<li>{moment(this.props.lastCommentTime.createdAt).fromNow()}</li>);
    } else {
      return (<div></div>);
    }
  }
  renderNumberOfCommentsText() {
    switch(this.props.commentsCount) {
      case 1: return(<T>ideas.comments.single</T>);
      case 2: case 3: case 4: return(<T>ideas.comments.few</T>);
      default: return(<T>ideas.comments.many</T>);
    }
  }
  renderNumberOfComments() {
    return (this.props.commentsCount == 0) ? i18n.__('comment.no') : this.props.commentsCount;
  }
  render () {
    var customImage = {
      background: "url(/img/banner-idea.jpg) center center no-repeat"
    };
    var noImage = {
      background: "url(/img/no-banner.png) center center no-repeat"
    };
    const author = this.props.author;
    return (
      <div>
        {!this.props.idea.isAuthor(Meteor.userId()) ? <BookmarkIdeaLink
          bookmarks={this.props.profile ? this.props.profile.bookmarkIdeas : []}
          ideaId={this.props.idea._id}/> : ''}
        <div className="row-border pointer clearfix" onClick={this.gotoIdeaDetails.bind(this)}>
          <Banner idea={this.props.idea} authors={Person.find({ userId: { $in: this.props.idea.getAuthors() } }).fetch()}/>
          <div className="white-card">
            <div className="content text-center clearfix">
              <ul className="stat"><li><h3>{this.props.idea.name}</h3></li></ul>
              <ul className="stat"><li>{this.renderNumberOfComments()} {this.renderNumberOfCommentsText()}</li>{this.renderLastCommentTime()}</ul>
            </div>
            <div className="modal-body">
              <b><T>ideas.header.story</T></b>
              <ReadOnlyEditor value={this.props.idea.story} placeholder={i18n.__('ideas.view.placeholder.story')} />
              <br />
              <b><T>ideas.header.problem</T></b>
              <ReadOnlyEditor value={this.props.idea.problem} placeholder={i18n.__('ideas.view.placeholder.problem')} />
              <br />
              <b><T>ideas.header.solution</T></b>
              <ReadOnlyEditor value={this.props.idea.solution} placeholder={i18n.__('ideas.view.placeholder.solution')} />
            </div>
          </div>
        </div>
        <ListDivider border={true}/>
      </div>
    )
  }
}

ListIdeaCard.contextTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  })
}

ListIdeaCard.propTypes = {
  idea: PropTypes.object.isRequired,
  profile: PropTypes.object,
  author: PropTypes.object
}
