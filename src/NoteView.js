import React, { Component } from 'react';
import api from './api';

export default class NoteView extends Component {
    updating = false;
    
    constructor(props) {
        super(props);

        this.state = {
            note: {
                id: '',
                title: '',
                body: '',
            }
        };
        
        this.updateNote = this.updateNote.bind(this);
    }
    
    showNote(note) {
        this.setState({note: note});
    }
    
    updateNote(event) {
        // update note property on client
        const name = event.target.name;
        let note = this.state.note;
        note[name] = event.target.value;
        this.setState({note: note });
        
        clearTimeout(this.updating);
        const NoteView = this;

        // update note property on server
        this.updating = setTimeout(() => {
            api.notes.update(NoteView.state.note.id, NoteView.state.note).then(() => {
                NoteView.props.parent.refs.NoteList.refreshNotes();    
            });
        }, 1000);
    }

    render() {
        return (
            <article className="NoteView">
                <input name="title" value={this.state.note.title} onChange={this.updateNote}/>
                <textarea name="body" value={this.state.note.body} onChange={this.updateNote}/>
            </article>
        )
    }
}
