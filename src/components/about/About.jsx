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
                            <small>Master of Science Electrical and Electronic Engineering</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Research</h5>
                            <small>Control Systems </small>
                            <small>Machine Learning Application<br/></small>
                            <small> Web Development </small>

                        </article>
                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5>Research and Teaching Assistance</h5>
                            <small>+3 years</small>
                        </article>
                    </div>
                    <p>
                        I have a Master's in Electrical and Electronic Engineering, and some of the broad areas I
                        know about include control systems and employing PSCAD to model wind turbine failures.
                        I currently work as a web developer in a field different to my academic background, which has
                        given me fresh perspectives and motivation.
                        Since I believe that nothing in this world is static, I always attempt to adapt and learn new things.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About