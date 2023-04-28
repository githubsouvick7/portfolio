import React from 'react'

const Social = (props) => {
    const { site, gmail } = props;
    return (
        <>
            {site === "Github" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://github.com/githubsouvick7`}>
                <img src={`/images/Github.png`} width="35px" alt={site} draggable="false" />
            </a>}

            {site === "Instagram" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://www.instagram.com/i_am_souvick_/`}>
                <img src={`/images/Instagram.png`} width="35px" alt={site} draggable="false" />
            </a>}

            {site === "Linkedin" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://www.linkedin.com/in/souvick-chakraborty-51249b221/`}>
                <img src={`/images/Linkedin.png`} width="35px" alt={site} draggable="false" />
            </a>}

            {site === "gmail" && <a className='pe-3' href={"mailto:" + gmail}>
                <img src={`/images/gmail.png`} width="35px" alt={site} draggable="false" />
            </a>}
        </>
    )
}

export default Social

