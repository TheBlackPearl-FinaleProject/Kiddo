import React ,{useState} from 'react';
import { StyleSheet, View, Text ,SafeAreaView, ScrollView,Image,TouchableOpacity} from 'react-native';
import { sendvideocat } from '../screens/redux/actions';
import { connect } from 'react-redux';
 class  Videolists extends React.Component{
     constructor(props){
         super(props)
         this.state={
             
        }
    }
     pressHandler = (x) => {
         this.props.sendvideocat(x.item)
         console.log(this.props.videocat)
        this.props.navigation.navigate("Videos")
        
    }
     render(){
    const list = [
        {key:"a1",item:"funny",pic:require('./assests/pictures/Letters.png')},
        {key:"a2",item:"cartoon",pic:require('./assests/pictures/Numbers.png')},
        {key:"a3",item:"song",pic:require('./assests/pictures/Body-parts.png')},
        
    ]
        return(
            <View style={styles.mainContainer}>
             <SafeAreaView >
                <ScrollView >
                {list.map((x,i)=>{
                     var y=x.key
                        return (
                        <TouchableOpacity onPress={()=>this.pressHandler(x) } key={i}>
                        <View style={styles[y]}>
                        <View style={styles.cardContent}>
                        <Text>{x.item}</Text>
                        <Image 
                         source={x.pic}
                         style={{ width: 90, height: 45 }}/>
                         </View>
                         </View>
                         </TouchableOpacity>  
                        )
                })}
                </ScrollView>
             </SafeAreaView>
            </View>
            )
    }
 }

const styles = StyleSheet.create({
    a1:{
        fontFamily:'font2',
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#2AC1DC',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a2:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#773EA9',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a3:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#EA3A7A',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a4:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#F88408',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a5:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#79C24D',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a6:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#ED1B24',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a7:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'gold',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:18,
        // marginHorizontal:20,
        // marginVertical:35
    }
})
const mapStateToProps = (state) => {
    return {

    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        sendvideocat: (z) => { dispatch(sendvideocat(z)) },
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Videolists);  
  