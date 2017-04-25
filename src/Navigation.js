import React, { Component } from 'react';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.addNote = this.addNote.bind(this);
    }
    
    addNote() {
        this.props.parent.refs.NoteList.addNote({
            title: 'New note',
            body: 'Write your note here',
            createdAt: Date.now(),
            status: 'Saving...',
        });

        this.props.parent.refs.NoteList.refreshNotes();
    }
    
    render() {
        return (
            <nav>
                <button onClick={this.addNote}>+</button>
            </nav>
        )
    }
}
