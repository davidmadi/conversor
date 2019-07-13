import variable from './../variables/platform';

export default (variables = variable) => {
	const inputTheme = {
		'.multiline': {
			height: null,
		},
		".quantity" : {
			backgroundColor: 'transparent',
			marginLeft:20, 
			fontSize:38, 
			width:30, 
			lineHeight:45,
		},
		height: variables.inputHeightBase,//50
		height: variables.inputHeightBase,
		color: variables.inputColor,
		paddingLeft: 5,
		paddingRight: 5,
		flex: 1,
		fontSize: variables.inputFontSize,
		lineHeight: variables.inputLineHeight,
	};

	return inputTheme;
};
