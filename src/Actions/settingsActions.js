import {DISABLE_BALANCE_ADD,DISABLE_BALANCE_EDIT,ALLOW_REGISTRATION} from './types'


export const setDisableBalanceOnAdd = (message,messageType) => {
    const settings = JSON.parse(localStorage.getItem('settingsReducer'));

    settings.disableBalanceOnAdd = !  settings.disableBalanceOnAdd;


    localStorage.setItem('settingsReducer',JSON.stringify(settings))
    return {
        type:DISABLE_BALANCE_ADD,
        payload:settings.disableBalanceOnAdd
    }
}
export const setDisableBalanceOnEdit = (message,messageType) => {
    const settings = JSON.parse(localStorage.getItem('settingsReducer'));

    settings.disableBalanceOnEdit = !  settings.disableBalanceOnEdit;

    localStorage.setItem('settingsReducer',JSON.stringify(settings))

    return {
        type:DISABLE_BALANCE_EDIT,
        payload:settings.disableBalanceOnEdit
    }
}

export const setAllowRegistraion = (message,messageType) => {
    const settings = JSON.parse(localStorage.getItem('settingsReducer'));

    settings.allowRegistration = !  settings.allowRegistration;

    localStorage.setItem('settingsReducer',JSON.stringify(settings))

    return {
        type:ALLOW_REGISTRATION,
        payload:settings.allowRegistration
    }
}