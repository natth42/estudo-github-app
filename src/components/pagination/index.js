import React from 'react'
import pagination from '../../utils/pagination'
import Page from '../page'
import './pagination.css'

const Pagination = ({total, activePage, onClick}) => (
    <div>
        <ul className='pagination'>
            {
                pagination({total, activePage}).map((page, index) => (
                    <li key={index} className={`pagination-item ${activePage === page ? 'active' : ''}`}>
                        <Page page={page} onClick={onClick} />
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Pagination