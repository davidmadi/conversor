import variable from "./../variables/platform";

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    },
    ".tab":{
      marginLeft:10
    },
    ".title":{
      fontSize:variable.DefaultFontSize*2
    },
    ".button":{
      fontSize:variable.DefaultFontSize*2,
      lineHeight:variable.DefaultFontSize*2,
    },
    ".invert":{
      color:"#FFF"
    }
  };

  return textTheme;
};
