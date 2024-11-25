function Reducer(state,action) {
  switch (action.type) {
    case 'change_location':
      return {
        ...state,
        location: action['payload'].location
      }
    break;
    case 'change_language':
      return {
        ...state,
        language: action['payload'].language
      }
    break;
  }
}

export default Reducer;