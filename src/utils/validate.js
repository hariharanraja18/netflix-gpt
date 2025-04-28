export const checkValidData =(email,password,isSignInForm,username="")=>{
    const isUserNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(username);
    const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isEmailvalid = /^\S+@\S+\.\S+$/.test(email);

    if(!isEmailvalid) return "Email is not valid";
    if(!isPasswordvalid) return "Password is not valid";

    if(!isSignInForm && !isUserNameValid) return "username is not valid";

    return null;
}
