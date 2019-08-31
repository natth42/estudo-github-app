import React from 'react'
import PropTypes from 'prop-types'

const Search = ({isDisabled, handleSearch}) => (
    <div className="search">
        <input
            type="search"
            placeholder="Digite um usuário para buscar"
            disabled={isDisabled}
            onKeyUp={(e) => handleSearch(e)} />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}

export default Search