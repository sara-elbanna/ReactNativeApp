import React, { useState ,useEffect} from 'react'
import {View, StyleSheet, Modal, Button, TouchableOpacity,TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
var globalStyle = require('../../style');
var theme = require('../../theme')
import {addCategory} from '../../store/actions/notes-actions'
import {  Text } from 'react-native-elements';
// import {  } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    container:{
        padding: 40,
        paddingBottom:20,
        flex:1
    },
    categories: {
        // flex:2
    },
    categoryRow:{
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    category:{
        textTransform:'capitalize',
        color: theme.colors.secondary
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgba(0,0,0,.3)'
    },
    modalView: {
        // flex:2,
        margin: 20 ,
        marginBottom:0,
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height:180,
        position:'relative'
    },     
    modalFooter:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'stretch',
        flexDirection:'row',
        // backgroundColor:'green',
        width:'100%',
        position:'absolute',
        bottom:0,
        left:0,
        borderTopWidth:1,
        borderTopColor:'#ccc',
        // borderTopStyle:'solid',
        // padding:10
        

    },
    modalFooterButtons:{
        color:'red',
        width:'50%',
        height:'100%',
        paddingTop:15,
        paddingBottom:15,
        borderColor:'#ccc'
    },
    modalFooterBtnText:{
        textAlign:'center'
   
    },
    modalInput:{
        margin:20,
        borderStyle:'solid',
        borderColor:'#ccc',
        borderWidth:1,
        width:270,
        paddingLeft:10,
        paddingRight: 10
    },
    addButton:{
        width: 60,
        borderRadius:50,
        backgroundColor:theme.colors.primary,
        height:60,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:40,
        color:'#fff'
    },
    addButtonWrap:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    

    
});

class Home extends React.Component {
    state ={
        showAddModal: false,
        newCategoryName: ""
    }
    componentDidMount(){

    }
    handleAddCategory = () =>{
         this.props.addCategory(this.state.newCategoryName)
         this.setState({showAddModal: false, newCategoryName:''})
         this.props.navigation.navigate('category',{id: this.props.notesCategories.length+1})
    }
    render(){
        // if(!this.props.usersList) return <View>Loading...</View>
        console.log('3333333333',this.props.notesCategories)
        return <View style={styles.container}>
            <View style={globalStyle.screenHeader}>
                <Text style={globalStyle.screenHeaderTitle} h1>My Notes</Text >
            </View>
            <ScrollView>
                <View>
                    {this.props.notesCategories.map((category,index) => {
                        return <TouchableOpacity  
                                    key={index} 
                                    style={styles.categories} 
                                    style={styles.categoryRow} 
                                    onPress={() => this.props.navigation.navigate('category',{id:category.id})}
                                >
                                <Text style={styles.category}  h2 >{category.name}</Text>
                                <Text style={styles.category} h2> {category.count} </Text>
                            </TouchableOpacity>                 
                        {/* </View> */}
                    })}
                </View>
            </ScrollView>
            
            {/* <Button style={styles.addButton} title='+' onPress={()=> this.setState({showAddModal:true})}/> */}
            <View style={styles.addButtonWrap} >
                <Text onPress={()=> this.setState({showAddModal:true})} style={styles.addButton} >+</Text>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.showAddModal}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text h4> New Category</Text>
                    <Text > Enter a name for this category</Text>
                    <View>
                        <TextInput
                            onChangeText={text => this.setState({newCategoryName: text})}
                            placeholder = "Category name"
                            style={styles.modalInput}
                            autoFocus={true} 
                        />
                    </View>
                    <View style={styles.modalFooter}>
                        <TouchableOpacity style={[styles.modalFooterButtons, , {borderRightWidth:1}]} onPress={()=> this.setState({showAddModal:false})}>
                            <Text style={[styles.modalFooterBtnText]}>
                                Cancel
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalFooterButtons}      onPress={this.handleAddCategory}>
                            <Text style={[styles.modalFooterBtnText]}>
                                {this.EditedUser?'edit':'add'}
                            </Text>
                        </TouchableOpacity>
                        
                        {/* <Button style={styles.modalFooterButtons} title='Cancel' onPress={()=> this.setState({showAddModal:false})}/> */}
                    </View>
                    
                </View>
            </View>
        </Modal>
        </View>
    }
    
}

const mapStateToProps = state => {
    return {
      notesCategories: state.notes.categories
    };
  };
  
  const mapDispatchToProps = {
    addCategory
  };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
