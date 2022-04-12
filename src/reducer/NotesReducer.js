



 export const notesReducer = (state, {type, payload}) => {
    switch (type) {
        case 'DELETE_NOTE':
            return {
                ...state, notesData: [...state.notesData.filter((item) => {
                   return  item.id !== payload.id
                })],
                archiveNotes: [...state.archiveNotes.filter((item) => {
                    return  item.id !== payload.id
                 })]
            }        
        case 'ADD_NOTE':
            
            return {
                ...state, notesData: [...state.notesData, payload],
            }   
        case 'COLOR_CHANGE':
            return {
                ...state, notesData: [...state.notesData.map((item) => {
                    if(item.id === payload.id){
                        return payload
                    }else{
                        return item
                    }
                })]
            }    
            
        case 'ARCHIVE_NOTE':
            return {
                ...state, notesData: [...state.notesData.filter((item) => {
                    return  item.id !== payload.id
                 })],
                 archiveNotes: [...state.archiveNotes, payload]
            } 
        case 'RESTORE_NOTE':
            return {
                ...state, notesData: [...state.notesData, payload],
                archiveNotes: [...state.archiveNotes.filter((item) => {
                    return  item.id !== payload.id
                 })]
            }        
        default:
            return state
    }
}