import Head from 'next/head'

import Menu from '../components/Menu'

import { Container, Jumbotron } from 'reactstrap'

function Home() {
    return (
      <>
      <Head>
        <title>Sobre empresa - Bruce</title>
        <meta name="description" content="Sobre a empresa"/>
        <meta name="author" content="Deimos"/>
      </Head>
      <Menu/>
      <Jumbotron fluid className="descr-top">
        <style>
          {
            `.descr-top{
              background-color: #000;
              color: #fed136;
              padding-top: 100px;
              padding-bottom: 50px;
              margin-bottom: orem !important;
            }`
          }
        </style>
        <Container className="text-center">
          <h1 className="display-4">Sobre empresa</h1>
        </Container>
      </Jumbotron>
      </>
    )
  }
  
  export default Home