import axios from 'axios';


export const  loginService = async (email, password) => {
    try {
        const response = await axios.post('/api/auth/login', 
        {
            email, password
        })

        // if(response.status === 200 || response.status === )
        console.log(response)
    } catch (error) {
        console.log(error)
    }

    
}

// export const signupS