import { SET_OPENED_WALLET, SET_INPUT_NAME, SET_INPUT_AMOUNT}  from "../actions/walletAction";
import { SET_WALLETS } from "../actions/walletAction";
import { TOGGLE_SHOW_WALLETS, TOGGLE_CREDIT_FORM, TOGGLE_DEBIT_FORM } from "../actions/walletAction";
import { TOGGLE_DISPLAY_PAGE, TOGGLE_WALLET_CREATE_FORM} from "../actions/walletAction";

const initialState = {
    showWallets: false,
    showForm: false,
    showCreditForm: false,
    showDebitForm: false,
    input_name: "",
    input_amount: 0,
    onWalletPage: false,
    wallets: [],
    openedWallet: {
        id: 0,
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
        case SET_WALLETS:
            return {
                ...state,
                wallets: action.wallets
            }
        case TOGGLE_WALLET_CREATE_FORM:
            return {
                ...state,
                showForm: action.showForm
            }
        case TOGGLE_CREDIT_FORM:
            return {
                ...state,
                showCreditForm: action.showCreditForm
            }
        case TOGGLE_DEBIT_FORM:
            return {
                ...state,
                showDebitForm: action.showDebitForm
            }
        case TOGGLE_SHOW_WALLETS:
            return {
                ...state,
                showWallets: action.showWallets
            }
        case SET_INPUT_NAME:
            return {
                ...state,
                input_name: action.input_name
            }
        case SET_INPUT_AMOUNT:
            return {
                ...state,
                input_amount: action.input_amount
            }
        default:
            return state;
    }
}
