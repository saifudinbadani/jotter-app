

 export const notesReducer = (state, {type, payload}) => {
    switch (type) {
        case 'DELETE_NOTE':
            return {
                ...state, notesData: [...state.notesData.filter((item) => {
                   return  item.id !== payload.id
                })]
            }        
        case 'ADD_NOTE':
            return {
                ...state, notesData: [...state.notesData, payload]
            }    
        default:
            return state
    }
}