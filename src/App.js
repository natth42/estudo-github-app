import React from 'react';
import AppContent from './components/app-content';
import './App.css'

const initialState = {
    repos: [],
    pagination: {
        total: 1,
        activePage: 1
    }
};

let link;
let totalPagesMatch;

class App extends React.PureComponent {
  constructor() {
      super()
      this.state = {
          userInfo: null,
          repos: initialState,
          starred: initialState,
          isFetching: false,
      }
      this.perPage = 3
  }

  getGithubUrl (username, type, page = 0) {
      const internalUsername = username ? `/${username}` : `` 
      const internalType = type ? `/${type}` : `` 
      return `https://api.github.com/users${internalUsername}${internalType}?per_page=${this.perPage}&page=${page}`
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
                  repos: initialState,
                  starred: initialState
              })
          })
          .then(() => {
              this.setState({ isFetching: false })
          })
      }
  }

  getRepos(type, page) {
        const { login } = this.state.userInfo
        fetch(this.getGithubUrl(login, type, page))
        .then(resposta => {
            link = resposta.headers.get("Link") || ''
            totalPagesMatch = link.match(/&page=(\d+)>; rel="last/)
            return resposta.json()
        }).then(data => {
          this.setState({
              [type]: {
                repos: data.map((repo) => ({
                    name: repo.name,
                    link: repo.html_url
                })),
                pagination: {
                    total: totalPagesMatch ? +totalPagesMatch[1] : +this.state[type].pagination,
                    activePage: page
                }
              }
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
          handlePagination={(type, page) => this.getRepos(type, page)}
      />
    )
  }
}

export default App;
