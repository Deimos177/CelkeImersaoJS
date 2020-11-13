import React from 'react'
import { Text } from 'react-native'

import { 
  Container, 
  Content, 
  RowDataHome, 
  DataIcon, 
  DataHome,
  ViewContact 
} from './style'

export default function Home (){
  return(
    <Container>
      <Content>
        <RowDataHome>
          <DataIcon>A</DataIcon>
          <DataHome>Serviço 1</DataHome>
          <ViewContact>C</ViewContact>
        </RowDataHome>
        <RowDataHome>
          <Text>Descrição</Text>
        </RowDataHome>
      </Content>
    </Container>
  )
}