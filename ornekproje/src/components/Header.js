import React from 'react';
import {Text,View,height} from 'react-native';


const Header = (props) => {
    const{textStyle} = styles;
    const{viewStyle} = styles;
    return(
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    textStyle:{
        fontSize:45
    },
    viewStyle:{
        borderWidth:2,
        borderRadius:20,
        borderColor:'#ddd',
        borderBottomWidth:5,
        backgroundColor:'#f1f1f1',
        height:120,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        marginTop:25,
        shadowOffset:{width: 0,height :2},
        shadowOpacity:0.2,
         
    }
};
export default Header;