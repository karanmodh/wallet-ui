import { RootState } from "../../../app/store";
import { walletDetailsProp } from "../components/Wallet";

export const TOGGLE_DISPLAY_PAGE = 'TOGGLE_DISPLAY_PAGE';
export const SET_OPENED_WALLET = 'SET_OPENED_WALLET';
export const SET_WALLETS = 'SET_WALLETS';
export const SET_INPUT_NAME = 'SET_INPUT_NAME';
export const SET_INPUT_AMOUNT = 'SET_INPUT_AMOUNT';
export const TOGGLE_WALLET_CREATE_FORM = 'TOGGLE_WALLET_CREATE_FORM';
export const TOGGLE_SHOW_WALLETS = 'TOGGLE_SHOW_WALLETS';

const WALLET_URL = 'http://localhost:8000/wallets';

export const toggleDisplayPage = (onWalletPage: boolean) => {
    return {
        type: TOGGLE_DISPLAY_PAGE,
        onWalletPage: onWalletPage
    }
}

export const setOpenedWallet = (openedWallet: walletDetailsProp) => {
    return {
        type: SET_OPENED_WALLET,
        openedWallet: openedWallet
    }
}

export const toggleShowWallets = (showWallets: boolean) => {
    return {
        type: TOGGLE_SHOW_WALLETS,
        showWallets: showWallets
    }
}

export const toggleWalletCreateForm = (showForm: boolean) => {
    return {
        type: TOGGLE_WALLET_CREATE_FORM,
        showForm: showForm
    }
}

export const setInputName = (input_name: string) => {
    return {
        type: SET_INPUT_NAME,
        input_name: input_name
    }
}

export const setInputAmount = (input_amount: number) => {
    return {
        type: SET_INPUT_AMOUNT,
        input_amount: input_amount
    }
}

const setWallets = (wallets: walletDetailsProp[]) => {
    return {
        type: SET_WALLETS,
        wallets: wallets
    }
}

export const fetchWallets = () => {
    return (dispatch:any) => {
        fetch(WALLET_URL)
        .then(response => {
            return response.json();
        }).then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(setWallets(res)); 
            return res;
        }).catch(error => {
            console.error('Error:', error)
        })
    }    
}

export const addWallet = (input_name: string, input_amount: number) => {
    return (dispatch:any) => {
        fetch(WALLET_URL, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "name": input_name,
                    "balance": input_amount,
                    "transactions": [
                        {
                            "amount": input_amount,
                            "type": "topup"
                        }
                    ]
                }
            ),
        }).then(response => {
            return response.json()
        }).catch(error => {
            console.error('Error:', error)
        }).then(response => {
            dispatch(fetchWallets())
            console.log(response);
            console.log('Success:', JSON.stringify(response))
        });
    }
}

// GETTERS for state
export const getPage = (state: RootState) => state.wallet.onWalletPage;
export const getOpenedWallet = (state: RootState) => state.wallet.openedWallet;
export const getWallets = (state: RootState) => state.wallet.wallets;
export const getShowWallets = (state: RootState) => state.wallet.showWallets;
export const getShowForm = (state: RootState) => state.wallet.showForm;
export const getInputName = (state: RootState) => state.wallet.input_name;
export const getInputAmount = (state: RootState) => state.wallet.input_amount;