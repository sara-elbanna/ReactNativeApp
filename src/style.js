'use strict';

var React = require('react-native');
var theme = require('./theme')
var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

    screenHeader: {
        marginTop: 24,
        height: 100,
        // width: '100%',
        // textAlign: 'center',
        // padding:40,
        // margin: 'auto',
    },
    screenHeaderTitle:{ 
        color:theme.colors.primary

    }

});