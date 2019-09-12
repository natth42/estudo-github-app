import React from 'react'
import PropTypes from 'prop-types'

import Pagination from './pagination'

const Repos = ({className, title, repos, handlePagination}) => (
    <div className={className}>
        <h3>{title}</h3>
        <ul>
            {
                repos.repos.map((repo, index) => (
                    <li key={index}><a href={repo.link}>{repo.name}</a></li>
                ))
            }
        </ul>
        <Pagination total={repos.pagination.total} activePage={repos.pagination.activePage} onClick={handlePagination} />
    </div>
)

Repos.propsType = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.shape({
        repos: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired 
        })).isRequired,
        pagination: PropTypes.shape({
            total: PropTypes.number.isRequired,
            activePage: PropTypes.number.isRequired
        }).isRequired
    }).isRequired, 
    handlePagination: PropTypes.func.isRequired
}

export default Repos