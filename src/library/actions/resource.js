import { AsyncStorage } from "react-native"
import { NativeModules } from 'react-native'

export default class ResourceAction
{

  static async loadLanguage(dispatch){
    var languageSelected = await NativeModules.ExponentLocalization.getCurrentLocaleAsync();
    
    dispatch({type:'LANGUAGE_RESOURCE', language:languageSelected});
  }

  static setLanguage(dispatch, language){
    dispatch(
    {
      type:language
    });
  }

  static message(value, languageReducer){

    if (languageReducer[value])
      return languageReducer[value];
    else 
      return value;

  }
}