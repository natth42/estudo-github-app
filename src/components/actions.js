import React from 'react'
import PropTypes from 'prop-types';

const Actions = ({ getRepos, getStarred }) => (
    <div className="actions">
        <button onClick={() => getRepos()}>ver repositorios</button>
        <button onClick={() => getStarred()}>ver favoritos</button>
    </div>
)

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
}

export default Actions