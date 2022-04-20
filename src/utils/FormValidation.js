

export function validateEmail(email) 
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// export function passwordMatch(passwordOne, passwordTwo){
//     let successClass = 'success';
//     let errorClass = 'error';


//     if(passwordOne === passwordTwo){
//         return successClass
//     } else {
//         return errorClass
//     }

// }