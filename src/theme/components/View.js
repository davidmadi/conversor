import variable from "./../variables/platform";

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    ".half":{
      width:(variable.deviceWidth/2)
    },
    ".twoThird":{
      width:(variable.deviceWidth/3)*2
    },
    ".full":{
      width:variable.deviceWidth
    },
    ".line":{
      height:20
    }
  };

  return viewTheme;
};
