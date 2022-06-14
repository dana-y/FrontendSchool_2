import Link from '../atoms/Link';
import Img from '../atoms/img';

const LogoutBar = () => {
  return (
    <>
      <li>
        <Link>
          <Img src='../../assets/icons/icon-login.svg' alt='Login'/>
          <span>Login</span>
        </Link>
      </li>
      <li>
        <Link to='./'>
          <Img src='../../assets/icons/icon-register.svg' alt='Register'></Img>
          <span>Register</span>
        </Link>
      </li>
    </>
  )
}

export default LogoutBar;