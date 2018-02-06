import {
    ADD_TITLE,
    ACTIVE_TITLE,
    ADD_ITEM
  } from './types';
  
  
  class Title {
      constructor(
        title
       ) {
        this.title = title;
        this.id = genId(title);
        this.items = [];
       
      }
    }
    
    const genId = (title) => {
      let rand = Math.random().toString(36).substr(2, 9);
      return title.replace(/ /g,'') + rand;
    }
    
    const initialState = {
      selectedTitle: undefined,
      titles: []
    }
    
  export default function reducer(state=initialState, action) { // state defaults to the previously defined initialState variable if it's undefined
      switch(action.type) {
            case ADD_TITLE:
                let newTitle = new Title(action.payload);
                return {...state, titles: state.titles.concat([newTitle]), selectedTitle: newTitle.id}
            case ACTIVE_TITLE:
                return {...state, selectedTitle: action.payload}
            case ADD_ITEM:
                let newTitles = state.titles.slice();
                newTitles.forEach((title) => {
                    if (title.id === state.selectedTitle){
                        title.items.push(action.payload);
                    }
                })
                return {...state, titles: newTitles}
            default:
                return state;
      }
  }

