import React, { useState } from 'react'
import Head from 'next/head'

import Menu from '../components/Menu'

import Footer from '../components/Footer'

import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Home() {
  const [contato, setContato] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  })

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  const onChangeInput = event => setContato({
    ...contato, 
    [event.target.name]: event.target.value
  })
  const sendMsg = async event =>{
    event.preventDefault()
    
    setResponse({ formSave: true })
    try{
      const response = await fetch('http://192.168.1.110:8080/contato', {
        method: 'POST',
        body: JSON.stringify(contato),
        headers: {'Content-Type': 'application/json'}
      })
      const responseSubmit = await response.json()
      if(responseSubmit.error){
        setResponse({
          formSave: false,
          type: 'error',
          message: responseSubmit.message
        })
      }else{
        setResponse({
          formSave: false,
          type: 'success',
          message: responseSubmit.message
        })
      }
    }catch(error){
      setResponse({
        formSave: false,
        type: 'error',
        message: "Erro: Mesangem não enviada com sucesso, tente mais tarde."
      })
    }
  }
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
        {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div>:""}
        {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div>:""}
          <Form onSubmit={sendMsg}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Digite seu nome completo" onChange={onChangeInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="Digite seu e-mail" onChange={onChangeInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="subject">Assunto</Label>
              <Input type="Text" name="subject" id="subject" placeholder="Digite o assunto" onChange={onChangeInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="content">Conteúdo</Label>
              <Input type="Textarea" name="content" id="content" placeholder="Digite o conteúdo da mensagem" onChange={onChangeInput}/>
            </FormGroup>
            {response.formSave?<p className="alert alert-warning">Enviando...</p>: <Button type="submit" outline color="warning">Enviar</Button>}
          </Form>
        </Container>
      </Jumbotron>
      <Footer/>
      </>
    )
  }
  
  export default Home