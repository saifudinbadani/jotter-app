



 export const notesReducer = (state, {type, payload}) => {
    switch (type) {
        case 'NOTES':
            return {
                ...state, notesData: [...payload]
            }  
            // return {
            //     ...state, notesData: [...state.notesData.filter((item) => {
            //        return  item.id !== payload.id
            //     })],
            //     archiveNotes: [...state.archiveNotes.filter((item) => {
            //         return  item.id !== payload.id
            //      })]
            // }  
        case 'ARCHIVE':
            
        return {
            ...state, archiveNotes: [...payload]
        }
        // case 'ADD_NOTE':
        //     return {
        //         ...state, notesData: [...payload]
        //     }
        //     // return {
        //     //     ...state, notesData: [...state.notesData, payload],
        //     // }   
        // case 'UPDATE_NOTE':
        //     return {
        //         ...state, notesData: [...payload]
        //     }
        //     // return {
        //     //     ...state, notesData: [...state.notesData.map((item) => {
        //     //         if(item.id === payload.id){
        //     //             return payload
        //     //         }else{
        //     //             return item
        //     //         }
        //     //     })]
        //     // }    
            
        // case 'ARCHIVE_NOTE':
        //         return {
        //             ...state, notesData: [...payload.notes],
        //             archiveNotes: [...payload.archives]
        //         }
            // return {
            //     ...state, notesData: [...state.notesData.filter((item) => {
            //         return  item.id !== payload.id
            //      })],
            //      archiveNotes: [...state.archiveNotes, payload]
            // } 
        // case 'RESTORE_NOTE':
        //     return {
        //         ...state, notesData: [...state.notesData, payload],
        //         archiveNotes: [...state.archiveNotes.filter((item) => {
        //             return  item.id !== payload.id
        //          })]
        //     }  
        
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
                ...state, sortTime : "sortByLtoH"
            } 
        case 'sortByHtoL':
            return {
                ...state, sortTime: 'sortByHtoL'
            }           
        default:
            return state
    }
}