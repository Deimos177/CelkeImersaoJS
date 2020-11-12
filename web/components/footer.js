import React from 'react';

import { Container, Jumbotron } from 'reactstrap'

  const Footer = () => {
  
    return (
        <Jumbotron fluid className="footer">
            <style>
                {
                    `
                    .footer{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        margin-bottom: 0rem !important;
                    }
                    `
                }
            </style>
            <Container className="text-center">
                <h2 className="lead">Rodapé</h2>
            </Container>
        </Jumbotron>
    )
}

export default Footer