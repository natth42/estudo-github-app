import React from 'react'
import pagination from '../../utils/pagination'
import Page from '../page'

const Pagination = ({total, activePage}) => (
    <div>
        <ul>
            {
                pagination({total, activePage}).map((page, index) => (
                    <li key={index}><Page page={page} /></li>
                ))
            }
        </ul>
    </div>
)

export default Pagination