import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Button from './Button';

const Detay = (props) => {
    const{containerStyle, subContainerStyle,ImageStyle,titleStyle } =styles;
    return(
        <View style={containerStyle}>
            
            <View style={subContainerStyle}>
            <Text style={titleStyle}>{props.data.title} </Text>
            </View>

            <View style={subContainerStyle}>
            <Image style={ImageStyle} source={{uri: props.data.image}}/> 
            </View>

            <View style={subContainerStyle}>
            <Button onPress={()=> Linking.openURL(props.data.url)}>SATIN AL!</Button>    
            </View>

        </View>
        
    );
};
const styles = {
    containerStyle:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#ddd',
        borderBottomWidth:5,
        shadowColor:'#000',
        shadowOffset:{width:0, height: 2},
        shadowOpacity:0.2,
        shadowRadius:2,
        elevation:1,
        marginLeft:10,
        marginRight:10,
        marginTop:5,
    },
    subContainerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
        
    },
    ImageStyle:{
        height:300,
        flex:1
    },
    titleStyle:{
        fontSize:20
    }

};
export default Detay;