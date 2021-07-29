import { TOGGLE_DISPLAY_PAGE, SET_OPENED_WALLET } from "../actions/walletAction"

const initialState = {
    showForm: false,
    input_name: "",
    input_amount: 0,
    onWalletPage: false,
    wallets: [],
    openedWallet: {
        name: "",
        balance: 0,
        transactions: []
    },
    error: null
}

export const walletReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case TOGGLE_DISPLAY_PAGE:
            return {
                ...state,
                onWalletPage: action.onWalletPage
            }
        case SET_OPENED_WALLET:
            return {
                ...state,
                openedWallet: action.openedWallet
            }
        
        default:
            return state;
    }
}
