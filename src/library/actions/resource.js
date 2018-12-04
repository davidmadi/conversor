export default class ResourceAction
{
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