import React from 'react';
import {
  Text
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  View,
  Body,
  Left,
  Right,
  ListItem,
  Radio
} from "native-base";
import { connect } from "react-redux";
import ResourceAction from '../../library/actions/resource';


const Information = () => ({  
  render(){
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{ResourceAction.message('Configurações', this.props.languageReducer)}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <ListItem>
            <Left>
              <Text>{ResourceAction.message('Inglês', this.props.languageReducer)}</Text>
            </Left>
            <Right>
              <Radio selected={(this.props.languageReducer.languageChoosed === 'en')} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>{ResourceAction.message('Português', this.props.languageReducer)}</Text>
            </Left>
            <Right>
              <Radio selected={(this.props.languageReducer.languageChoosed === 'pt')} />
            </Right>
          </ListItem>        
        </Content>
      </Container>
    );
  }
});


const styles = {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#FFF"
  }
};

const mapStateToProps = (allReducers) => ({
  languageReducer : allReducers.languageReducer
});

const mapDispatchToProps  = (dispatch) => ({
  info : (_this) =>{
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
