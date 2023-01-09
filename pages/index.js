import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Movie_section from '../components/Movie_section'
import Navbar from '../components/Navbar'
import request from '../utils/request'

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* NavBar */}
      <Navbar />

      {/* Movie Section */}
      <Movie_section results={results}/>

    </div>

  )
}

// ServerSide Rendering
export async function getServerSideProps(context){
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`
  ).then(res => res.json());
  
  return{
    props: {
      results: requests.results,
    }
  }
}

