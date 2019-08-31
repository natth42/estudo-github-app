import React from 'react';
import AppContent from './components/app-content';
import './App.css';

class App extends React.PureComponent {
  constructor() {
      super()
      this.state = {
          userInfo: null,
          repos: [],
          starred: [],
          isFetching: false,
      }
  }

  getGithubUrl (username, type) {
      const internalUsername = username ? `/${username}` : `` 
      const internalType = type ? `/${type}` : `` 
      return `https://api.github.com/users${internalUsername}${internalType}`
  }

  handleSearch(e) {
      const value = e.target.value
      const keyCode = e.swith || e.keyCode
      const ENTER = 13

      if(keyCode === ENTER) {
          this.setState({ isFetching: true })
          fetch(this.getGithubUrl(value))
          .then(resposta => resposta.json())
          .then(data => {
              this.setState({
                  userInfo: {
                      photo: data.avatar_url,
                      login: data.login,
                      username: data.name,
                      repos: data.public_repos,
                      followers: data.followers,
                      following: data.following
                  },
                  repos: [],
                  starred: []
              })
          })
          .then(() => {
              this.setState({ isFetching: false })
          })
      }
  }

  getRepos(type) {
      const { login } = this.state.userInfo
      fetch(this.getGithubUrl(login, type))
      .then(resposta => resposta.json())
      .then(data => {
          this.setState({
              [type]: data.map((repo) => ({
                  name: repo.name,
                  link: repo.html_url
              }))
          })
      })
  }
  render() {
    return (
      <AppContent 
          {...this.state}
          handleSearch={(e) => this.handleSearch(e)} 
          getRepos={(e) => this.getRepos('repos')}
          getStarred={(e) => this.getRepos('starred')}
      />
    )
  }
}

export default App;
