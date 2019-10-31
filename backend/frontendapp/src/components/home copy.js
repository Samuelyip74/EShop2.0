import React, {Component} from "react";
import {connect} from "react-redux";
import {notes, auth} from "../actions";

class HomePage extends Component {

  render() {
    return (
      <div>
        <h2>Welcome to HomePage!</h2>
        <hr />
        <div style={{textAlign: "right"}}>
          {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    notes: state.notes,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => {
      dispatch(notes.fetchNotes());
    },
    addNote: (text) => {
      return dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      return dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
      dispatch(notes.deleteNote(id));
    },
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);