import './Services.css'
import {BiCheck} from "react-icons/bi";

const Services = () => {
    return(
        <section id='services'>
            <h5> What are my skills</h5>
            <h2>Areas</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3> As Electrical Engineer</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>wind turbine </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>control theory </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>well posedness </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>machine learning </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>stability</p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>Piecewise linear</p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>Flickers</p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="service__head">
                        <h3> As Software Developer</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>wind turbine </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>control theory </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>well posedness </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>machine learning </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>stability</p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>Piecewise linear</p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>Flickers</p>
                        </li>
                    </ul>
                </article>



                <article className="service">
                    <div className="service__head">
                        <h3> As Friend</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>wind turbine </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>control theory </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>well posedness </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>machine learning </p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>stability</p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>Piecewise linear</p>
                        </li>
                        <li>
                            <BiCheck className="service__list_icon"/>
                            <p>Flickers</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services