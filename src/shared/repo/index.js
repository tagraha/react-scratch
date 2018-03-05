import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews, fetchRepos } from "./../../../redux/repos";
import RepoList from "./RepoList";

class Repos extends Component {
  static initialAction() {
    return fetchRepos();
  }

  componentDidMount() {
    if (!this.props.repos) {
      this.props.dispatch(Repos.initialAction());
    }
  }

  render() {
    const { repos } = this.props;
    return <RepoList repos={repos} />;
  }
}

const mapStateToProps = state => ({
  repos: state.repos
});

export default connect(mapStateToProps)(Repos);