import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ADD_TITLE,
    ACTIVE_TITLE
} from './state/types';
import PropTypes from 'prop-types';
import './ui-tool/css/nm-cx/main.css';
import './App.css';



class Titles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInput: ''
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="medium-9 columns valign-middle">
                        <h1>Dojo Dossier</h1>
                    </div>
                    <div className="medium-3 columns">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.props.handleAddTitle(this.state.titleInput);
                            this.setState({ titleInput: '' })
                        }

                        }>
                            <div className="md-text-field">
                                <input
                                    onChange={(e) => this.setState({ titleInput: e.target.value })}
                                    type="text"
                                    placeholder="Enter new title"
                                    value={this.state.titleInput} />
                            </div>
                            <button className="button btn-cta small">Add Title</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="medium-12 columns">
                        <ul className="tabs">
                            {this.props.titles.length > 0 ?
                                this.props.titles.map((title) => {
                                    if (title.id === this.props.selectedTitle) {
                                        return (
                                            <li className="tab-title active" key={title.id} ><button id={title.id} onClick={this.props.handleChangeTitle}>{title.title}</button></li>
                                        )
                                    } else {
                                        return (
                                            <li className="tab-title" key={title.id}><button id={title.id} onClick={this.props.handleChangeTitle}>{title.title}</button></li>
                                        )
                                    }
                                }) :
                                <li className="tab-title disabled"><button>Add a title to start</button></li>
                            }
                        </ul>
                    </div>
                </div></div>
        )
    }
}

Titles.PropTypes = {
    titles: PropTypes.array,
    selectedTitle: PropTypes.string
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        titles: state.titles,
        selectedTitle: state.selectedTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        handleAddTitle(payload) {
            dispatch({ type: ADD_TITLE, payload })
        },
        handleChangeTitle({ target }) {
            console.log(target.id);
            dispatch({ type: ACTIVE_TITLE, payload: target.id })
        }
    }
}

const TitlesWrapped = connect(mapStateToProps, mapDispatchToProps)(Titles);
export default TitlesWrapped;