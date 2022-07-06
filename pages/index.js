import Head from 'next/head'
import { useRouter } from 'next/router';
import {useEffect} from 'react';
import {useStateContext} from '../components/Provider';
import Login from '../components/UI/Login/Login'

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()
  useEffect(() => {
   
    
  }, [])
  return (
    <div>
      SHOW HOME PAGE
    </div>
  )
}
