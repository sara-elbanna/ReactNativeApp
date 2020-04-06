import React, { useState ,useEffect} from 'react'
import {View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { getListOfUsers } from '../../store/actions/users-actions';

const styles = StyleSheet.create({
    user: {
      borderColor:'#ccc',
      borderWidth:1
    },
    
});

class Users extends React.Component {
    // state ={
    //     users_list : ['sara','ammar','mai','hana']
    // }
    componentDidMount(){
        this.props.getListOfUsers()
    }
    render(){
        if(!this.props.usersList) return <View>Loading...</View>
        console.log('3333333333',this.props.usersList)
        return <View>
        <Text>users</Text>
        <View>
            {this.props.usersList.map((user,index) => {
                return <View key={index} style={styles.user}>
                    <Text>{user.name}</Text>
                </View>
            })}
        </View>
        <View>
            {/* <Button onPress={this.showAddModal}>Add</Button> */}
        </View>
    </View>
    }
    
}

const mapStateToProps = state => {
    return {
      usersList: state.users.usersList
    };
  };
  
  const mapDispatchToProps = {
    getListOfUsers
  };
export default connect(mapStateToProps, mapDispatchToProps)(Users);
