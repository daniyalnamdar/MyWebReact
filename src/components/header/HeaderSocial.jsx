import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocial = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/daniyal-namdar-000369189/" target="_blank"><BsLinkedin size={25} /></a>
            <a href="https://github.com/daniyalnamdar" target="_blank"><FaGithub size={25}/></a>
            <a href="http://www.daniyalnamdar.com/" target="_blank"><FiDribbble size={25}/></a>
        </div>
    )
}

export default HeaderSocial