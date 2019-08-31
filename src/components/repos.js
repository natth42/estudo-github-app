import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({className, title, repos}) => (
    <div className={className}>
        <h3>{title}</h3>
        <ul>
            {
                repos.map((repo, index) => (
                    <li key={index}><a href={repo.link}>{repo.name}</a></li>
                ))
            }
        </ul>
    </div>
)

Repos.propsType = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos