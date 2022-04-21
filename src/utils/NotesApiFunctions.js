import axios from 'axios';


export const AddNoteApiCall = async (encodedToken, note) => {
    try {
        const response = await axios.post('/api/notes', {
            note
        }, {
            headers: {
                authorization: encodedToken
            }
        })

        if (response.status === 200 || response.status === 201) {
            return response.data.notes;
        }
    } catch (error) {
        console.log(error)
    }
}

export const GetNoteApiCall = async (encodedToken) => {
    try {
        const response = await axios.get('/api/notes', {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.notes;
        }
    } catch (error) {
        console.log(error)
    }
}

export const UpdateNoteApiCall = async (encodedToken, note) => {

    try {
        const response = await axios.post(`/api/notes/${note.id}`, {
            note
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.notes;
        }
    } catch (error) {
        console.log(error)
    }
}

export const DeleteNoteApiCall = async (encodedToken, note) => {
    try {
        const response = await axios.delete(`/api/notes/${note.id}`, {
            note
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.notes;
        }
    } catch (error) {
        console.log(error)
    }
}

export const GetArchiveNoteApiCall = async (encodedToken) => {
    try {
        const response = await axios.get('/api/archives', {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.archives;
        }
    } catch (error) {
        console.log(error)
    }
}

export const AddToArchiveApiCall = async (encodedToken, note) => {
    try {
        const response = await axios.post(`/api/notes/archives/${note.id}`,{
            note
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const RestoreFromArchiveApiCall = async (encodedToken) => {
    try {
        const response = await axios.post(`/api//archives/restore/${note.id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const DeleteFromArchiveApiCall = async (encodedToken) => {
    try {
        const response = await axios.delete(`/api//archives/delete/${note.id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.archives
        }
    } catch (error) {
        console.log(error)
    }
}