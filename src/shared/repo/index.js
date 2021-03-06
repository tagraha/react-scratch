import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos } from './../../../redux/repos';
import RepoList from './../../component/RepoList/RepoList';

class Repos extends Component {
  static initialAction() {
    return fetchRepos();
  }

  componentDidMount() {
    if (!this.props.repos.fetched) {
      this.props.repoFetchAction();
    }
  }

  render() {
    const { repos } = this.props;
    return <RepoList repos={repos.list} />;
  }
}

Repos.propTypes = {
  repos: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  repoFetchAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  repos: state.repos,
});

const mapActionsToProps = {
  repoFetchAction: fetchRepos,
};

export default connect(mapStateToProps, mapActionsToProps)(Repos);
