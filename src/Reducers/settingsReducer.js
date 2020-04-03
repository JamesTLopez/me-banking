import {DISABLE_BALANCE_ADD,DISABLE_BALANCE_EDIT,ALLOW_REGISTRATION} from '../Actions/types'


export default (state = {},action) =>{
    switch(action.type){
        case DISABLE_BALANCE_ADD:
            return {
                ...state,
                disableBalanceOnAdd: action.payload
            }
        case DISABLE_BALANCE_EDIT:
            return{
                ...state,
                disableBalanceOnEdit: action.payload
            }
        case ALLOW_REGISTRATION:
            return{
                ...state,
                allowRegistration: action.payload
            }
        default:
            return state;
    }
}