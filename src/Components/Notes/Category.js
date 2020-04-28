import React from 'react';
import {View, StyleSheet,ScrollView, TouchableOpacity, Button } from 'react-native';
import {  Text, Icon, CheckBox } from 'react-native-elements';

import { connect } from 'react-redux';
import moment from 'moment';
var globalStyle = require('../../style');
var theme = require('../../theme')
import { addNote, deleteAllNotes, deleteSelectedNotes } from '../../store/actions/notes-actions'

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
        overflow:'hidden',
        width:'100%'
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
    deleteButtonWrap:{
        display:'flex',
        justifyContent:'flex-end',
        // alignItems:'center',
        flex:1,
        // backgroundColor:'blue',
        paddingRight: 20,
        paddingBottom: 20
    }
});

class Category extends React.Component{
    categoryId = this.props.route.params.id
    state={
        editPressed: false,
        selectedNotes: []
    }
    componentDidMount(){
        // this.props.deleteSelectedNotes(this.categoryId, [1,2,3])
    }
    handleAddNewNote = () => {
        this.props.navigation.navigate('note',{id: this.props.notesList.length + 1})
        this.props.addNote(this.categoryId)

    }
    handleEdit = () => {
        this.setState({editPressed: false})
    }
    handleSelectNote = (noteId) => {
        let newList = [...this.state.selectedNotes]
        if( newList.indexOf(noteId) > -1 ) newList = newList.filter(x=> x !== noteId) 
        else newList = [...newList, noteId]
        this.setState({selectedNotes: newList})
    }
    handleDeleteNotes = () => {
        if(this.state.selectedNotes.length > 0){
            this.props.deleteSelectedNotes(this.categoryId, this.state.selectedNotes)
        }
        else{
            this.props.deleteAllNotes(this.categoryId)
            this.props.navigation.navigate('home')
        } 
        this.setState({selectedNotes: [], editPressed:false})
    }
    render(){
        
        const category = this.props.notesCategories.find(c=> c.id == this.categoryId )
        const categoryNotes = this.props.notesList.filter(note=> note.categoryId == this.categoryId )
        return <View style={{flex:8}}>
                <View style={[globalStyle.screenHeader, {position:'relative', padding:40, flex:1} ]}>
                    <View>
                        <View style={styles.navigation}>
                            {!this.state.editPressed && <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={styles.goBack}>
                                <Icon name='chevron-left' />
                                <Text style={{ color: theme.colors.primary}}>My notes</Text>
                            </TouchableOpacity>}
                            { !this.state.editPressed && <TouchableOpacity onPress={() => this.setState({editPressed: true})} style={styles.edit}>
                                <Text style={{ color: theme.colors.primary}}>Edit</Text>
                            </TouchableOpacity>}
                            { this.state.editPressed && <TouchableOpacity onPress={() => this.setState({editPressed: false, selectedNotes:[]})} style={styles.edit}>
                                <Text style={{ color: theme.colors.primary}}>Cancel</Text>
                            </TouchableOpacity>}
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
                            return <View key={note.id} style={{display:'flex', flexDirection:'row'}}>
                                { this.state.editPressed && <CheckBox
                                    center
                                    // title='Click Here'
                                    checkedColor={theme.colors.secondary}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.selectedNotes.indexOf(note.id) > -1}
                                    onPress={()=>this.handleSelectNote(note.id)}
                                    />}
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('note',{id:note.id})} style={[styles.noteBox, this.state.editPressed && {width:'80%'}]} >
                                    <Text style={{ color:'red'}}>{moment(new Date(note.date * 1000)).format('LL  LT')}</Text>
                                    <Text style={{marginTop:10, marginBottom:10}} >{note.content.slice(0,75)}...</Text>
                                    <Text style={{textAlign:'right', color:'red', fontWeight:'bold'}}>View note...</Text>
                                </TouchableOpacity>
                            </View> 
                        })}
                    </ScrollView>
                </View>
                { !this.state.editPressed && <View style={styles.addButtonWrap} >
                    <Icon onPress={this.handleAddNewNote} name='add' color={theme.colors.primary} style={{backgroundColor:'red'}}/>
                    {/* <Text onPress={this.handleAddNewNote} style={styles.addButton} >+</Text> */}
                </View>}
                { this.state.editPressed && <View style={[styles.deleteButtonWrap]} >
                    <TouchableOpacity onPress={this.handleDeleteNotes}  style={{display:'flex', flexDirection:'row', alignItems:'baseline',justifyContent:'flex-end'}}>
                        <Icon name='delete' color={theme.colors.primary}/>
                        {this.state.selectedNotes.length > 0 ? <Text>Delete</Text> : <Text>Delete all</Text>}
                    </TouchableOpacity>
                    
                </View>}
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
    addNote, deleteAllNotes, deleteSelectedNotes
  };
export default connect(mapStateToProps, mapDispatchToProps)(Category);


