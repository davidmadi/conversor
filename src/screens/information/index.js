import React, { Component } from "react";
import TouchableOpacity from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  List,
  Body,
  Left,
  Right,
  ListItem,
  CheckBox,
  View
} from "native-base";
import { connect } from "react-redux";
import ResourceAction from '../../library/actions/resource';

class Information extends Component
{

  constructor(props){
    super(props);
    this.state = {lang:'en'};
  }

//const Information = () => ({  

  selectTheLanguage(language){
    this.props.selectLanguage(language, this);
  }

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
          <ListItem onPress={this.selectTheLanguage.bind(this, 'en')}>
            <Left>
              <Text>{ResourceAction.message('Inglês', this.props.languageReducer)}</Text>
            </Left>
            <Right>
                <CheckBox onPress={this.selectTheLanguage.bind(this, 'en')}  checked={this.props.languageReducer.languageChoosed == 'en'} />
            </Right>
          </ListItem>
          <ListItem onPress={this.selectTheLanguage.bind(this, 'pt')}>
            <Left>
              <Text>{ResourceAction.message('Português', this.props.languageReducer)}</Text>
            </Left>
            <Right>
              <CheckBox onPress={this.selectTheLanguage.bind(this, 'pt')}  checked={this.props.languageReducer.languageChoosed == 'pt'} />
            </Right>
          </ListItem>        
        </Content>
      </Container>
    );
  }
};


const styles = {
  container: {
    flex: 1,
    backgroundColor:'#eafff2'
  }
};

const mapStateToProps = (allReducers) => ({
  languageReducer : allReducers.languageReducer
});

const mapDispatchToProps  = (dispatch) => ({
  selectLanguage : (language, _this) =>{
    ResourceAction.setLanguage(dispatch, language);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
