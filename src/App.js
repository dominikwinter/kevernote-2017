import React, { Component } from 'react';
// import R from 'ramda';
//import api from './api';
import Navigation from './Navigation';
import NoteList from './NoteList';
import NoteView from './NoteView';

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Navigation parent={this} ref="Navigation"/>
                <NoteList parent={this} ref="NoteList"/>
                <NoteView parent={this} ref="NoteView"/>
            </div>
        );
    }
}
