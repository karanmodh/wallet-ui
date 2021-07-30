import { RootState } from "../../../app/store";
import { transactionProp } from "../components/TransactionList";
import { walletDetailsProp } from "../components/Wallet";

export const TOGGLE_DISPLAY_PAGE = 'TOGGLE_DISPLAY_PAGE';
export const SET_OPENED_WALLET = 'SET_OPENED_WALLET';
export const SET_WALLETS = 'SET_WALLETS';
export const SET_INPUT_NAME = 'SET_INPUT_NAME';
export const SET_INPUT_AMOUNT = 'SET_INPUT_AMOUNT';
export const TOGGLE_WALLET_CREATE_FORM = 'TOGGLE_WALLET_CREATE_FORM';
export const TOGGLE_SHOW_WALLETS = 'TOGGLE_SHOW_WALLETS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const TOGGLE_CREDIT_FORM = 'TOGGLE_CREDIT_FORM';
export const TOGGLE_DEBIT_FORM = 'TOGGLE_DEBIT_FORM';

const WALLET_URL = 'http://localhost:8080/wallets';

export const toggleDisplayPage = (onWalletPage: boolean) => {
    return {
        type: TOGGLE_DISPLAY_PAGE,
        onWalletPage: onWalletPage
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

export const toggleCreditForm = (showCreditForm: boolean) => {
    return {
        type: TOGGLE_CREDIT_FORM,
        showCreditForm: showCreditForm
    }
}

export const toggleDebitForm = (showDebitForm: boolean) => {
    return {
        type: TOGGLE_DEBIT_FORM,
        showDebitForm: showDebitForm
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
                }
            ),
        }).then(response => {
            return response.json()
        }).catch(error => {
            console.error('Error:', error)
        }).then(response => {
            dispatch(fetchWallets());
            dispatch(setInputName(""));
            dispatch(setInputAmount(0));
            
            console.log(response);
            console.log('Success:', JSON.stringify(response))
        });
    }
}

const setOpenedWallet = (openedWallet: {"wallet": walletDetailsProp, "transactions": transactionProp[]}) => {
    return {
        type: SET_OPENED_WALLET,
        openedWallet: openedWallet
    }
}

export const fetchTransactions = (id?: number) => {
    const url = `${WALLET_URL}/${id}/transactions`;
    return (dispatch: any) => {
        fetch(url)
        .then(response => response.json())
        .catch(error => console.log(`Error: ${error}`))
        .then(response => {
            const openedWallet = {
                ...response.wallet,
                transactions: response.transactions
            }
            dispatch(setOpenedWallet(openedWallet))
            return response;
        })
    }
}

export const addTransaction = (input_remark: string, input_amount: number, type: string, id?: number) => {
    const url = `${WALLET_URL}/${id}/transactions`;
    return (dispatch:any) => {
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "remark": input_remark,
                    "amount": input_amount,
                    "type": type
                }
            ),
        }).then(response => {
            return response.json()
        }).catch(error => {
            console.error('Error:', error)
        }).then(response => {
            dispatch(fetchTransactions(id));
            dispatch(setInputName(""));
            dispatch(setInputAmount(0));
            
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
export const getShowCreditForm = (state: RootState) => state.wallet.showCreditForm;
export const getShowDebitForm = (state: RootState) => state.wallet.showDebitForm;
