import React, { Component } from 'react';
import api from './api';

export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
        
        this.loadNote = this.loadNote.bind(this);

        this.refreshNotes();
    }

    addNote(note) {
        api.notes.create(note);
    }
    
    refreshNotes() {
        api.notes.all().then(notes => this.setState({notes: notes}));
    }

    loadNote(note) {
        return () => {
            api.notes.get(note.id).then(note => this.props.parent.refs.NoteView.showNote(note));
        }
    }

    render() {
        return (
            <aside className="NoteList">
                <h2>Notes</h2>
                
                <ul>
                    {this.state.notes.map(note => <li key={note.id} onClick={this.loadNote(note)}>{note.title}<br/>{note.body}</li>)} 
                </ul>
            </aside>   
        )
    }
}
