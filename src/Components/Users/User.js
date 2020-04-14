import React from 'react';
import {View, Text, Stylesheet } from 'react-native';
import { connect } from 'react-redux';
import AddEditUser from './Add-EditUser';


class User extends React.Component{

    state={
        showEditModal: false
    }
    render(){
        let userId = this.props.route.params.id
        let user = this.props.usersList.find(user=> user.id === userId )
        console.log('eeeee',this.props.route.params.id, user  )
        return <View>
            <Text onPress={()=> this.setState({showEditModal: true})}>Edit</Text>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.website}</Text>

            {this.state.showEditModal && <AddEditUser onCancel={()=>this.setState({showEditModal:false})} userId={userId}/>}
        </View>
    }
}



const mapStateToProps = state => {
    return {
      usersList: state.users.usersList
    };
  };
  
  const mapDispatchToProps = {
    
  };
export default connect(mapStateToProps, mapDispatchToProps)(User);


