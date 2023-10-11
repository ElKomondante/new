import { ACTIVATION_REGISTRATION } from "../action-types";
import { IUserState} from "../../../types"

const initialState={
    user:null,
}

const userReducer=(state: IUserState = initialState, action: any)=>{
    switch (action.type){
        default:{
            return state;
        }
    }
}
export { userReducer }

// jo_nick@gmailvn.com
// Watananon
// 1osw4Gktzs51lAH