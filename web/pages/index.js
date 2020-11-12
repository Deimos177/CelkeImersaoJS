import Head from 'next/head'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import { Container, Jumbotron } from 'reactstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

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

      <Jumbotron fluid className="servicoes">
        <style>
          {
            `
            .servicos{
              background-color: #fff;
              padding-top: 80px;
              padding-bottom: 80px;
              margin-bottom: 0rem !important;
            }
            .circulo{
              width: 140px;
              height: 140px;
              background-color: #fed136;
              font-size: 52px;
              padding-top: 24;
              color: #fff;
            }
            .centralizar{
              margin-left: 100px;
              float: none !important;
              padding-top: 25px;
            }
            `
          }
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">
              Título
            </h2>
            <p className="lead pb-4">
              Subtitulo
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "code"]} />
              </div>
              <h2 className="mt-4 mb-4">Serviço 1</h2>
              <p>Descrição</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "laptop-code"]} />
              </div>
              <h2 className="mt-4 mb-4">Serviço 2</h2>
              <p>Descrição</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
              </div>
              <h2 className="mt-4 mb-4">Serviço 3</h2>
              <p>Descrição</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Footer/>
      </>
    )
  }
  
  export default Home