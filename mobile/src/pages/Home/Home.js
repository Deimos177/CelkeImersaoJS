import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { 
  Container, 
  Content, 
  RowDataHome, 
  DataIcon, 
  DataHome,
  ViewContact 
} from './style'

export default function Home (){
  const navigation = useNavigation()
  return(
    <Container>
      <Content onPress={() =>{
        navigation.navigate('Contact')
      }}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name="code"
            size={30}
            color="#000"
            />
            </DataIcon>
          <DataHome>Serviço 1</DataHome>
          <ViewContact><MaterialCommunityIcons 
          name="greater-than"
          size={30}
          color="#000"
          /></ViewContact>
        </RowDataHome>
        <RowDataHome>
          <Text>Descrição</Text>
        </RowDataHome>
      </Content>
      <Content onPress={() =>{
        navigation.navigate('Contact')
      }}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name="code"
            size={30}
            color="#000"
            />
            </DataIcon>
          <DataHome>Serviço 2</DataHome>
          <ViewContact><MaterialCommunityIcons 
          name="greater-than"
          size={30}
          color="#000"
          /></ViewContact>
        </RowDataHome>
        <RowDataHome>
          <Text>Descrição</Text>
        </RowDataHome>
      </Content>
      <Content onPress={() =>{
        navigation.navigate('Contact')
      }}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name="code"
            size={30}
            color="#000"
            />
            </DataIcon>
          <DataHome>Serviço 3</DataHome>
          <ViewContact><MaterialCommunityIcons 
          name="greater-than"
          size={30}
          color="#000"
          /></ViewContact>
        </RowDataHome>
        <RowDataHome>
          <Text>Descrição</Text>
        </RowDataHome>
      </Content>
    </Container>
  )
}