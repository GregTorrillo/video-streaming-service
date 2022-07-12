import Head from 'next/head'
import { useEffect } from 'react';
import { useStateContext } from '../components/Provider';
import { useRouter } from 'next/router';
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../components/UI/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck'

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v" />
      <MediaRow title="Series" type="small-h" />
      <MediaRow title="Action" type="small-v" />
      <MediaRow title="Horror" type="small-v" />
      <MediaRow title="Sci-fi" type="small-v" />
  
    </MainLayout>
  );
}
