import React, { useState ,useEffect} from 'react'
import {View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { getListOfUsers, deleteUser } from '../../store/actions/users-actions';
import AddEditUser from './Add-EditUser';

const styles = StyleSheet.create({
    user: {
      borderColor:'#ccc',
      borderWidth:1
    },
    
});

class Users extends React.Component {
    state ={
        showAddModal: false
    }
    componentDidMount(){
        console.log('propssss',this.props)

        this.props.getListOfUsers()
    }
    handleDeleteUser = (id) =>{
        this.props.deleteUser(id)
    }
    render(){
        if(!this.props.usersList) return <View>Loading...</View>
        console.log('3333333333',this.props.usersList)
        return <View>
        <Text>users</Text>
        <View>
            {this.props.usersList.map((user,index) => {
                return <View key={index} style={styles.user}>
                    <Text onPress={() => this.props.navigation.navigate('user',{id:user.id})}>{user.name}</Text>
                    <Text onPress={()=>this.handleDeleteUser(user.id)}>X</Text>
                </View>
            })}
        </View>
        <View>
            <Button title="Add" onPress={()=>this.setState({ showAddModal: true})}/>
        </View>
       {this.state.showAddModal && <AddEditUser onCancel={()=>this.setState({showAddModal:false})}/>}
    </View>
    }
    
}

const mapStateToProps = state => {
    return {
      usersList: state.users.usersList
    };
  };
  
  const mapDispatchToProps = {
    getListOfUsers, deleteUser
  };
export default connect(mapStateToProps, mapDispatchToProps)(Users);
