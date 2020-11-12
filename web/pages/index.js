import Head from 'next/head'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import { Container, Jumbotron } from 'reactstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function Home({ data }) {
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
        <h1 className="display-4">{data.home.topTitle}</h1>
        <p className="lead">{data.home.topSubTitle}</p>
          <p>
            <a href={data.home.topLinkButton} className="btn btn-outline-warning btn-lg">
              {data.home.topTextButton}
            </a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
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
              {data.home.serviceTitle}
            </h2>
            <p className="lead pb-4">
              {data.home.serviceSubTitle}
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.home.firstServiceIcon} />
              </div>
              <h2 className="mt-4 mb-4">{data.home.firstServiceTitle}</h2>
              <p>{data.home.firstServiceDescription}</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.home.secondServiceIcon} />
              </div>
              <h2 className="mt-4 mb-4">{data.home.secondServiceTitle}</h2>
              <p>{data.home.secondServiceDescription}</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.home.thirdServiceIcon} />
              </div>
              <h2 className="mt-4 mb-4">{data.home.thirdServiceTitle}</h2>
              <p>{data.home.thirdServiceDescription}</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Footer/>
      </>
    )
  }

  export async function getServerSideProps(){
    const response = await fetch(`http://192.168.1.110:8080/home`)
    const data = await response.json()
    return {props: { data }}
  }
  
  export default Home