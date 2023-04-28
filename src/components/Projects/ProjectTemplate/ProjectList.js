import React from 'react'

export default function ProjectList(props) {
    const { id, name, desc, github, tags, link } = props;
    const badge = {
        background: "black",
        padding: "3px 6px",
        borderRadius: "10px",
        fontSize: "12px",
        color: "white"
    }

    return (
        <>
            <div className="accordion-header d-flex justify-content-end align-items-center" id="headingOne">
                <button className="accordion-button collapsed d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#open${id}`} aria-expanded="false" aria-controls={`open${id}`}>
                    {name}
                </button>
                <div className="link d-flex justify-content-end align-items-center">
                    <a rel="noreferrer" target="_blank" href={link}><img src={"/images/website-link.svg"} width="30px" height="30px" alt="" /></a>
                    <a rel="noreferrer" className='mx-3' target="_blank" href={github}><img src={"/images/Github.png"} width="30px" height="30px" alt="" /></a>
                </div>
            </div>
            <div id={`open${id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <span><i>Technologies:</i> &nbsp; {tags}</span>
                    <br />
                    {desc}
                </div>
            </div>
        </>
    )
}
