import Head from 'next/head'

import Menu from '../components/Menu'

import Footer from '../components/Footer'

import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Home() {
    return (
      <>
      <Head>
        <title>Contato - Bruce</title>
        <meta name="description" content="Contato com a empresa"/>
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
          <h1 className="display-4">Contato</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="contact-form">
        <style>
          {
            `
            .contact-form{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin: 0rem !important;
            }
            `
          }
        </style>
        <Container className="">
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Digite seu nome completo" />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Assunto</Label>
              <Input type="Text" name="subject" id="subject" placeholder="Digite o assunto" />
            </FormGroup>
            <FormGroup>
              <Label for="content">Conteúdo</Label>
              <Input type="Textarea" name="content" id="content" placeholder="Digite o conteúdo da mensagem" />
            </FormGroup>
            <Button type="submit" outline color="warning">Enviar</Button>
          </Form>
        </Container>
      </Jumbotron>
      <Footer/>
      </>
    )
  }
  
  export default Home