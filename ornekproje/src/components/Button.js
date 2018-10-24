import React from 'react';
import {Text,TouchableOpacity} from  'react-native';

const Button = ({onPress,children}) =>{
    const{buttonStyle,textStyle}=styles;
    return (
        <TouchableOpacity onPress={onPress} style ={buttonStyle} >
        <Text style = {textStyle}>{children}</Text>
        </TouchableOpacity>
    );

};
const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#FF0000',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#F5F5F5',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#000000',
        marginLeft:5,
        marginRight:5
    }
};
export default Button;