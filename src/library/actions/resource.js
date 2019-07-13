import { AsyncStorage } from "react-native"
import { NativeModules } from 'react-native'
const key = '@conversor::resource_language';

export default class ResourceAction
{
  static async loadLanguage(dispatch){
    AsyncStorage.getItem(key)
    .then((val) =>{
      if (val)
      {
        dispatch({type:'LANGUAGE_RESOURCE', language:val});
      }
      else
      {
        NativeModules.ExponentLocalization.getCurrentLocaleAsync()
        .then((languageSelected)=>{
          ResourceAction.setLanguage(dispatch, languageSelected);
        })
        .catch(()=>{
          ResourceAction.setLanguage(dispatch, 'pt');
        })
      }
    })
  }

  static setLanguage(dispatch, languageSelected){
    AsyncStorage.setItem(key, languageSelected);
    dispatch({type:'LANGUAGE_RESOURCE', language:languageSelected});
  }

  static message(value, languageReducer){

    if (languageReducer[value])
      return languageReducer[value];
    else 
      return value;

  }
}