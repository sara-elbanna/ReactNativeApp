import React from 'react';
import {View, StyleSheet,ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {  Text, Icon, Tooltip } from 'react-native-elements';

import { connect } from 'react-redux';
import moment from 'moment';
var globalStyle = require('../../style');
var theme = require('../../theme')
import {editNote, deleteNote} from '../../store/actions/notes-actions'

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
    noteTextWrap:{
        padding:20,
        paddingTop:0,
        height:'80%',
        // backgroundColor:'red',
    },
    noteText:{
       fontSize:16,
       height:'100%' ,
    }

});

class Note extends React.Component{
    constructor(props){
        super(props);
         this.noteId = this.props.route.params.id
         this.note = this.props.notesList.find(n=> n.id == this.noteId )
        this.state={
            newNoteContent: this.note.content,
            inputFocus: false
        }

    }

    handleEditNote =()=>{
        this.refs.input.blur()
        this.props.editNote(this.note.id, this.state.newNoteContent)
        this.setState({inputFocus: false})
        
    }
    handleDeleteNote = () => {
        this.props.deleteNote(this.note)
        this.props.navigation.navigate('category',{id: this.note.categoryId})
    }
    render(){
                return <View >
                <View style={[globalStyle.screenHeader, {position:'relative', padding:40, height:5,  paddingBottom:10 } ]}>
                    <View>
                        <View style={styles.navigation}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('category',{id: this.note.categoryId})} style={styles.goBack}>
                                <Icon name='chevron-left' />
                                <Text style={{ color: theme.colors.primary}}>My notes</Text>
                            </TouchableOpacity>
                            {this.state.inputFocus && <TouchableOpacity onPress={this.handleEditNote} style={styles.edit}>
                                <Text style={{ color: theme.colors.primary}}>Done</Text>
                            </TouchableOpacity>}
                        </View>

                    </View>
                             
                </View>

                    <View style={[styles.noteTextWrap,{ height:'80%'}]}>
                        <TextInput
                            multiline={true}
                            onFocus={()=> this.setState({inputFocus: true})}
                            ref="input"
                            autoFocus={!this.state.newNoteContent} 
                            // numberOfLines={4}
                            style={styles.noteText}
                            textAlignVertical = "top"
                            onChangeText={(text) => this.setState({newNoteContent: text})}
                            value={this.state.newNoteContent}/>
                    </View>
                    <View style={{height:'10%', marginLeft:10, display:'flex', alignItems:'flex-start'}}>
                        <Icon name='delete' color={theme.colors.primary} onPress={this.handleDeleteNote}/>
                        {/* <Tooltip popover={<Text>Info here</Text>}>
                            <Text>Press me</Text>
                        </Tooltip> */}
                    </View>
                



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
    editNote, deleteNote
  };
export default connect(mapStateToProps, mapDispatchToProps)(Note);


