export const sortByPriorityFn = (state, data) => {
    const sortingOrder = ['Low', 'Medium', 'High']
    if(state === "SORT_BY_PRIORITY_LtoH"){
        return [...data].sort((a,b) => sortingOrder.indexOf(a.priority) - sortingOrder.indexOf(b.priority))
    } 
    if(state === "SORT_BY_PRIORITY_HtoL"){
        return [...data].sort((a,b) => sortingOrder.indexOf(b.priority) - sortingOrder.indexOf(a.priority) )
    } 
    if(state === "sortByLtoH"){
        return [...data].sort((a,b) =>  a.sortTime - b.sortTime)
    }
    if(state === 'sortByHtoL'){
        return [...data].sort((a,b) => b.sortTime - a.sortTime)
    }
    return data
}

// export const sortByTimeFn = (state, data) => {
//     if(state === "sortByLtoH"){
//         return [...data].sort((a,b) =>  a.sortTime - b.sortTime)
//     }
//     if(state === 'sortByHtoL'){
//         return [...data].sort((a,b) => b.sortTime - a.sortTime)
//     }
//     return data
// }