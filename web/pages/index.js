import Head from 'next/head'

import Menu from '../components/Menu'

import { Button, Container, Jumbotron } from 'reactstrap'

function Home() {
    return (
      <>
      <Head>
        <title>Home - Bruce</title>
        <meta name="description" content="Site de serviços"/>
        <meta name="author" content="Deimos"/>
      </Head>
      <Menu/>
      <Jumbotron fluid className="descr-top">
        <style>
          {
            `.descr-top{
              background-color: #000;
              color: #fed136;
              padding-top: 150px;
              padding-bottom: 150px;
              margin-bottom: orem !important;
            }`
          }
        </style>
        <Container className="text-center">
          <h1 className="display-4">Titulo</h1>
          <p className="lead">Subtitulo</p>
          <p className="lead">Subtitulo</p>
          <p>
            <a href="#" className="btn btn-outline-warning btn-lg">
              Texto
            </a>
          </p>
        </Container>
      </Jumbotron>
      </>
    )
  }
  
  export default Home