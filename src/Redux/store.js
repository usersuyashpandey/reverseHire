import { legacy_createStore as createStore} from 'redux'

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.payload.id);
    case 'UPDATE_CONTACT':
      return state.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
    default:
      return state;
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contacts', serializedState);
  } catch {
   
  }
};

const store = createStore(contactsReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;



