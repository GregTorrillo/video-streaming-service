import Head from 'next/head'
import { useStateContext } from '../components/Provider';
import ls from 'local-storage'
import {v4} from 'uuid'
import { useRouter } from 'next/router';
import Login from '../components/UI/Login/Login';

const LoginPage = () => {
  return (
    <Login />
  )
}

export default LoginPage;
