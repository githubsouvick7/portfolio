import React from 'react'
import Social from '../Social'
import './Home.css'

export default function Home() {
  return (
    <div className='mt-4'>
      <div className="row row-1 ">
        <div className="col-12 col-md-6 column-1">
          <h1 className='heading'>Souvick Chakraborty</h1>
          <h2 className='subHeading'>( Frontend Developer )</h2>
          <p className='para'>I intend to shape my career with a challenging and rewarding
            position in an esteemed organization, which will enable me to utilize my technical skills &
            abilities to help me evolve in my professional and personal life.
          </p>
          <div>
            <h5 className='fw-bold mt-4 mb-3'>Contact Me:</h5>
            <div className="d-flex justify-content-between w-50 pb-4">
              <Social site="gmail" gmail="hellosouvickk@gmail.com" />
              <Social site="Linkedin" />
              <Social site="Github" />
              <Social site="Instagram" />
            </div>
          </div>

          <div className='mb-5'>
            <a className='myBtnLink' target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1gvqrjhxPxQ4gxFazvlf2mIH3ruR49_3D/view?usp=drivesdk'>
              <button className="btn myBtn">Resume</button>
            </a>
          </div>

        </div>

        <div className="col-12 col-md-6 column-2">
          <img className='introImg' src={process.env.PUBLIC_URL + '/images/intro.svg'} alt="intro" />
        </div>
      </div>

      {/* Work Experince */}

    </div>
  )
}
