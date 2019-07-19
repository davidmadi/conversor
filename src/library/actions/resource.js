import { AsyncStorage } from "react-native"
import * as Localization from 'expo-localization';
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
        if (Localization && Localization.locale){
          ResourceAction.setLanguage(dispatch, Localization.locale);
        }
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