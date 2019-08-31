import React from 'react'
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
    <div className="app">
        <Search isDisabled={isFetching} handleSearch={(e) => handleSearch(e)} />
        {isFetching && <div>Carregando...</div>}
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && <Actions getRepos={() => getRepos()} getStarred={() => getStarred()} />}
        
        {
            !!repos.length
            &&
            <Repos 
                className="repos"
                title="Repositórios"
                repos={repos}
            />
        }

        {
            !!starred.length
            &&
            <Repos 
                className="repos"
                title="Favoritos"
                repos={starred}
            />
       }
    </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object, 
    repos: PropTypes.array.isRequired, 
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
}

export default AppContent