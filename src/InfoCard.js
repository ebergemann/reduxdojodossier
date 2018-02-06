import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_ITEM } from './state/types'
import './ui-tool/css/nm-cx/main.css';
import './App.css';



class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInput: ''
    }
  }
  render() {
    return (
      <div>
        <div className="card padding-none infoContainer">
          <div className="row padding-vert-medium valign-top">
            <div className="medium-10 medium-offset-1 columns text-left">
            {this.props.titles.length > 0 ?
              this.props.titles.map((title) => {
                if (title.id === this.props.selectedTitle) {
                  return (
                    <div>
                      <ul className="disc">
                      {title.items.length > 0 &&
                        <div>
                          {
                            title.items.map((item, idx) => {
                              return (
                                <li key={idx} id={idx}>{item}</li>
                              )
                            })
                          }
                       </div>
                      }
                       </ul>
                    </div>
                  )
                } 
              }) : <span></span>
            }</div>
          </div>
          {this.props.selectedTitle &&
            <div className="row padding-horiz-medium valign-bottom">

              <form onSubmit={(e) => {
                e.preventDefault();
                this.props.addItemToTitle(this.state.itemInput);
                this.setState({ itemInput: '' })
              }}>
                <div className="medium-9 columns padding-left-medium ">
                  <input
                    type="text"
                    onChange={(e) => this.setState({ itemInput: e.target.value })}
                    placeholder="Enter new item"
                    value={this.state.itemInput} />
                </div>
                <div className="medium-3 columns">
                  <button className="button btn-cta small">Add Item</button>
                </div>
              </form>

            </div>}
        </div>
      </div>

    )
  }
}

InfoCard.PropTypes = {
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
    addItemToTitle(payload) {
      dispatch({ type: ADD_ITEM, payload });
    }
  }
}

const WrappedInfoCard = connect(mapStateToProps, mapDispatchToProps)(InfoCard)

export default WrappedInfoCard;