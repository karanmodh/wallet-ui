import { RootState } from "../../../app/store";
import { walletDetailsProp } from "../components/Wallet";

export const TOGGLE_DISPLAY_PAGE = 'TOGGLE_DISPLAY_PAGE';
export const SET_OPENED_WALLET = 'SET_OPENED_WALLET';
export const SET_WALLETS = 'SET_WALLETS';
export const TOGGLE_WALLET_CREATE_FORM = 'TOGGLE_WALLET_CREATE_FORM';
export const TOGGLE_SHOW_WALLETS = 'TOGGLE_SHOW_WALLETS';

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

const setWallets = (wallets: walletDetailsProp[]) => {
    return {
        type: SET_WALLETS,
        wallets: wallets
    }
}

export const fetchWallets = () => {
    return (dispatch: (arg0: { type: string; wallets: walletDetailsProp[]; }) => void) => {
        fetch('http://localhost:8000/wallets')
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

export const getPage = (state: RootState) => state.wallet.onWalletPage;
export const getOpenedWallet = (state: RootState) => state.wallet.openedWallet;
export const getWallets = (state: RootState) => state.wallet.wallets;
export const getShowWallets = (state: RootState) => state.wallet.showWallets;
export const getShowForm = (state: RootState) => state.wallet.showForm;