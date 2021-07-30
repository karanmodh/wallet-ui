import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalAtm from '@material-ui/icons/LocalAtm';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import IconButton from "@material-ui/core/IconButton";
import { TransactionList } from "./TransactionList";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getOpenedWallet, getPage, getShowCreditForm, getShowDebitForm, toggleCreditForm, toggleDebitForm, toggleDisplayPage } from "../actions/walletAction";
import { AdditionForm } from "./AdditionForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
        minWidth: 150
    },
    back_icon: {
        padding: "10px",
        margin: "auto",
        color: "white"
    },
    back_button_div: {
        maxWidth: "max-content",
        minWidth: 70,
        borderRadius: "50px",
        backgroundColor: "#4051B5"
    }
  }),
);

export interface walletDetailsProp {
    id: number,
    name: string,
    balance: number,
}


export const Wallet = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const wallet_details = useAppSelector(getOpenedWallet);
    const page = useAppSelector(getPage);
    const credit_form = useAppSelector(getShowCreditForm);
    const debit_form = useAppSelector(getShowDebitForm);

    const title = `${wallet_details.name}'s Wallet`;

    const handleBackClick = () => {
        dispatch(toggleDisplayPage(!page));
    }

    const handleTopup = () => {
        if(debit_form){
            dispatch(toggleDebitForm(!debit_form))
        }
        dispatch(toggleCreditForm(!credit_form))
    }

    const handleWithdraw = () => {
        if(credit_form){
            dispatch(toggleCreditForm(!credit_form))
        }
        dispatch(toggleDebitForm(!debit_form))
    }

    return (
        <div>
            <div style={{display: "flexbox", justifyContent: "space-between"}}>
                <h1 style={{color:"#4B4968"}}>{title}</h1>
                <h1 style={{color:"#4B4968"}}><i className="fa fa-inr"></i> {wallet_details.balance}</h1>
            </div>
            
            <br />

            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleIcon />} className={classes.button} onClick={() => handleTopup()}>
            Top-up
            </Button>

            <Button variant="contained" color="primary" size="large" startIcon={<LocalAtm />} className={classes.button} onClick={() => handleWithdraw()}>
            Withdraw
            </Button>
            
            {credit_form?<AdditionForm id={wallet_details.id} type="CREDIT"/>:<div></div>}
            {debit_form?<AdditionForm id={wallet_details.id} type="DEBIT"/>:<div></div>}

            <TransactionList transactions={wallet_details.transactions} />

            <br />
            <IconButton aria-label="add to shopping cart" onClick={()=>handleBackClick()} >
                <div className={classes.back_button_div}>
                    <ArrowBackRoundedIcon className={classes.back_icon} fontSize="large"/>    
                </div>
            </IconButton>
        </div>
    )
}