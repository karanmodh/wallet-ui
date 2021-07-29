import { RootState } from "../../../app/store";
import { walletDetailsProp } from "../components/Wallet";

export const TOGGLE_DISPLAY_PAGE = 'TOGGLE_DISPLAY_PAGE';
export const SET_OPENED_WALLET = 'SET_OPENED_WALLET';
export const FETCH_WALLETS = 'FETCH_WALLETS'

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

export const getPage = (state: RootState) => state.wallet.onWalletPage;
export const getOpenedWallet = (state: RootState) => state.wallet.openedWallet;