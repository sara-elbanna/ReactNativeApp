
import React, { useState ,useEffect} from 'react'
import {View, Text, StyleSheet, Button, Modal, TouchableHighlight,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { getListOfUsers, addUser } from '../../store/actions/users-actions';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        marginTop: 22
      },
      modalView: {
        // flex:.5,
        margin: 20 ,
        marginBottom:5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },     
      footer:{
          display:'flex',
          justifyContent:'space-between',
          flexDirection:'row'
      }
    
});

class Users extends React.Component {
    EditedUser = this.props.userId
    state ={
        username:'',
        phone:'',
        website:''
    }

    componentDidMount(){
        if(this.EditedUser){
            let selectedUser = this.props.usersList.find(user => user.id == this.EditedUser)
            this.setState({
                username: selectedUser.name,
                phone: selectedUser.phone,
                website: selectedUser.website
            })
        }
    }
    handleAdd =()=>{
        console.log('wwww',this.state.username)
        let user ={name: this.state.username}
        this.props.addUser(user)
        this.props.onCancel()
    }
    render(){
        return <Modal
            animationType="fade"
            transparent={true}
            visible={true}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {!this.EditedUser && <Text> Add New User</Text>}
                <View>
                    <TextInput
                        onChangeText={text => this.setState({username: text})}
                        value={this.state.username}
                        placeholder = "Name"
                    />
                    <TextInput
                        onChangeText={text => this.setState({phone: text})}
                        value={this.state.phone}
                        placeholder = "Phone"
                    />
                    <TextInput
                        onChangeText={text => this.setState({website: text})}
                        value={this.state.website}
                        placeholder = "Website"
                    />
                </View>
                <View style={styles.footer}>
                    <Button title={this.EditedUser?'edit':'add'} onPress={this.handleAdd}/>
                    <Button title='Cancel' onPress={this.props.onCancel}/>
                </View>
                
            </View>
            </View>
        </Modal>
    }
    
}

const mapStateToProps = state => {
    return {
      usersList: state.users.usersList
    };
  };
  
  const mapDispatchToProps = {
    getListOfUsers,
    addUser
  };
export default connect(mapStateToProps, mapDispatchToProps)(Users);


