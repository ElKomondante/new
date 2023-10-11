
import { takeEvery } from "redux-saga/effects"
import { ACTIVATION_REGISTRATION, SIGN_IN, SIGN_UP } from "../action-types"
import { ISignUp,IRegistrationActivation,ISignIn, ITokenResponse } from "../../../types"

const activationRegistration = (activationInfo: IRegistrationActivation)=>({
    type: ACTIVATION_REGISTRATION,
    activationInfo,
})

const signUp=( signUpInfo: ISignUp)=>({
    type: SIGN_UP,
    signUpInfo
})

const SignIn=( SignInInfo: ISignIn)=>({
    type: SIGN_IN,
    SignInInfo
})


function* fetchActivationRegistration(action: any) {
	const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
		method: 'POST',
		headers: { 
            'Content-type': 'application/json' 
        },
    body: JSON.stringify(action.activationInfo),
})
console.log(response);
}




function* fetchSignUp(action: any){
    const response: Response = yield fetch ('https://studapi.teachmeskills.by/auth/users/',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.signUpInfo)
        })
    }


function* fetchSignIn(action:any){
    const response: Response = yield fetch ('https://studapi.teachmeskills.by/auth/jwt/create/',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.SignInInfo)
        })
        if (response.status === 200) {
            const { refresh, access}:ITokenResponse = yield response.json();
            console.log(refresh,access)
            localStorage.setItem('access',access)
            localStorage.setItem('refresh',refresh)
        }
}



function* watchUser(){
    yield takeEvery(ACTIVATION_REGISTRATION, fetchActivationRegistration)
    yield takeEvery(SIGN_UP, fetchSignUp)
    yield takeEvery(SIGN_IN, fetchSignIn)
}


export{
    activationRegistration,
    watchUser,
    signUp,
    SignIn
}
// Xadyilla
// santinodestini_21@catsforgold.com
// 5gQNSOl8nfYXOvL