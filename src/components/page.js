import React from 'react'

const Dots = () => <span>...</span>

const Page = ({page, onClick}) => {
    const Component = page === '...' ? Dots : 'a'

    const handleClick = !onClick ? null : (e) => {
        e.preventDefault();
        onClick(page);
    }

    return (
        <Component href="#" onClick={handleClick}>{page}</Component>
    )
}

export default Page;