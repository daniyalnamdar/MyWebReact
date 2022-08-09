import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
    return(
    <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experiences</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Electrical engineering</h3>
                <div className="experience__content">
                <article className="experience__details">
                    <BsFillPatchCheckFill/>
                    <h4>MATLAB</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>PSCAD</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>Arduino</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>Proteus</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>Altium designer</h4>
                        <small className='text-light'>Beginner</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>LaTeX</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>Office</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                </div>
            </div>

            <div className="experience__backend">

                <h3>Web Developer</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>PHP</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>SYMFONY</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>Css</h4>
                        <small className='text-light'>Basic</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>MYSQL</h4>
                        <small className='text-light'>Beginner</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>Git</h4>
                        <small className='text-light'>Basic</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>HTML</h4>
                        <small className='text-light'>Basic</small>
                    </article>
                    <article className="experience__details">
                        <BsFillPatchCheckFill/>
                        <h4>PYTHON</h4>
                        <small className='text-light'>Beginner</small>
                    </article>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Experience