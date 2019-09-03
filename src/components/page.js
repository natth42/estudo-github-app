import React from 'react'

const Page = ({page}) => {
    const Component = page === '...' ? 'span': 'a'
    const href = page === '...' ? null : '#'
    return (
        <Component href={href}>{page}</Component>
    )
}

export default Page;