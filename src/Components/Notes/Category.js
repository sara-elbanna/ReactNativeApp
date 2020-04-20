import React from 'react';
import {View, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import {  Text, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import moment from 'moment';
var globalStyle = require('../../style');
var theme = require('../../theme')

const styles = StyleSheet.create({
    container:{
        padding: 40,
        paddingBottom:20,
        flex:1
    },
    navigation:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        position:'relative'
    },
    goBack:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        position: 'absolute',
        top: -30,
        left: -40,
        
    },
    edit:{
        position: 'absolute',
        top: -30,
        right:-20,
    },
    headerTitle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    categoryCount:{
        width:50,
        height:50,
        backgroundColor:'#0096881c',
        color: theme.colors.secondary,
        borderRadius: 50,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    
    boxes:{
        paddingLeft:20,
        paddingRight:20,
        marginTop: 60
    },
    noteBox:{
        backgroundColor:'#fff',
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:5,
        marginBottom:20,
        height:120,
        overflow:'hidden'
    },
    addButton:{
        width: 50,
        borderRadius:50,
        backgroundColor:theme.colors.secondary,
        height:50,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:35,
        color:'#fff'
    },
    addButtonWrap:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
});

class Category extends React.Component{

    state={
    }
    render(){
        const categoryId = this.props.route.params.id
        const category = this.props.notesCategories.find(c=> c.id == categoryId )
        const categoryNotes = this.props.notesList.filter(note=> note.categoryId == categoryId )
        return <View style={{flex:8}}>
                <View style={[globalStyle.screenHeader, {position:'relative', padding:40, flex:1} ]}>
                    <View>
                        <View style={styles.navigation}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={styles.goBack}>
                                <Icon name='chevron-left' />
                                <Text style={{ color: theme.colors.primary}}>My notes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={styles.edit}>
                                <Text style={{ color: theme.colors.primary}}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                       
                        <View style={styles.headerTitle}>
                            <Text style={[globalStyle.screenHeaderTitle, {textTransform:'capitalize'}]} h1>{category.name}</Text >
                            <Text style={ styles.categoryCount}  >{category.count}</Text >
                        </View> 
                    </View>
                             
                </View>
                <View style={{flex:6, height:'100%', padding:10}}>
                    <ScrollView >
                        {categoryNotes.slice(0).reverse().map(note=>{
                            return <TouchableOpacity style={styles.noteBox} key={note.id}>
                                <Text style={{ color:'red'}}>{moment(new Date(note.date * 1000)).format('LL  LT')}</Text>
                                <Text style={{marginTop:10, marginBottom:10}} >{note.content.slice(0,75)}...</Text>
                                <Text style={{textAlign:'right', color:'red', fontWeight:'bold'}}>View note...</Text>
                            </TouchableOpacity>
                        })}
                    </ScrollView>
                </View>

                <View style={styles.addButtonWrap} >
                    <Text onPress={()=> this.setState({showAddModal:true})} style={styles.addButton} >+</Text>
                </View>
                {/* <TouchableOpacity style={{flex:1}}>
                    <Text>+</Text>
                </TouchableOpacity> */}
        </View>
    }
}



const mapStateToProps = state => {
    return {
        notesCategories: state.notes.categories,
        notesList: state.notes.notesList
    };
  };
  
  const mapDispatchToProps = {
    
  };
export default connect(mapStateToProps, mapDispatchToProps)(Category);


