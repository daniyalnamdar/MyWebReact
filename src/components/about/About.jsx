import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaUniversity} from 'react-icons/fa'

const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Education</h5>
                            <small>Graduated Electrical Engineering</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Research</h5>
                            <small>Stability and well-posedness of conewise linear system</small>
                        </article>
                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5>Teaching Assistance or hobbies</h5>
                            <small>+3 years</small>
                        </article>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About