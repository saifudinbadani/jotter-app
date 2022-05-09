



 export const notesReducer = (state, {type, payload}) => {
    switch (type) {
        case 'NOTES':
            return {
                ...state, notesData: [...payload]
            }  
            
        case 'ARCHIVE':
            
        return {
            ...state, archiveNotes: [...payload]
        }
        
        case 'SORT_BY_PRIORITY_LtoH':
            
            return {
                ...state, sortByPriority:  "SORT_BY_PRIORITY_LtoH"
            }
        case 'SORT_BY_PRIORITY_HtoL':
            return {
                ...state, sortByPriority:  "SORT_BY_PRIORITY_HtoL"
            }  
        case 'sortByLtoH':
            return {
                ...state, sortByPriority : "sortByLtoH"
            } 
        case 'sortByHtoL':
            return {
                ...state, sortByPriority: 'sortByHtoL'
            }           
        default:
            return state
    }
}