const listReducer = (state = {}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
      case "LISTITEM_ADD":
        newState[
          Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
        ] = {
          complete: false,
          label: action.payload
        };
        break;
      default:
        break;
    }
  
    return newState;
  };
  export default listReducer;