import React from 'react';
import {View, Text, Stylesheet } from 'react-native';
import { connect } from 'react-redux';


class Category extends React.Component{

    state={
    }
    render(){
        let category = this.props.route.params.id
        return <View>
            <Text>{category}</Text>
        </View>
    }
}



const mapStateToProps = state => {
    return {
    };
  };
  
  const mapDispatchToProps = {
    
  };
export default connect(mapStateToProps, mapDispatchToProps)(Category);


