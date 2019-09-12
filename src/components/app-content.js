import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

import './app-content.css'

const AppContent = ({ userInfo, repos, starred, isFetching, handleSearch, handlePagination, getRepos, getStarred }) => (
    <div className="app">
        <Search isDisabled={isFetching} handleSearch={(e) => handleSearch(e)} />
        {isFetching && <div>Carregando...</div>}
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && <Actions getRepos={() => getRepos()} getStarred={() => getStarred()} />}

        <div className='repos-container'>
            {
                !!repos.repos.length
                &&
                <Repos 
                    className="repos"
                    title="Repositórios"
                    repos={repos}
                    handlePagination={(page) => handlePagination('repos', page)}
                />
            }

            {
                !!starred.repos.length
                &&
                <Repos 
                    className="starred"
                    title="Favoritos"
                    repos={starred}
                    handlePagination={(page) => handlePagination('starred', page)}
                />
        }
       </div>
    </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object, 
    repos: PropTypes.shape({
        repos: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired 
        })).isRequired,
        pagination: PropTypes.shape({
            total: PropTypes.number,
            activePage: PropTypes.number
        }).isRequired
    }).isRequired, 
    starred: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handlePagination: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
}

export default AppContent