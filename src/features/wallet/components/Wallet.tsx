import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalAtm from '@material-ui/icons/LocalAtm';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import IconButton from "@material-ui/core/IconButton";
import { transactionProp } from "./TransactionList";
import { TransactionList } from "./TransactionList";

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
    name: string,
    amount: number,
    transactions?: transactionProp[]
}


export const Wallet = (props: (walletDetailsProp)) => {
    const classes = useStyles();
    const title = `${props.name}'s Wallet`;
    return (
        <div>
            <div style={{display: "flexbox", justifyContent: "space-between"}}>
                <h1 style={{color:"#4B4968"}}>{title}</h1>
                <h1 style={{color:"#4B4968"}}><i className="fa fa-inr"></i> {props.amount}</h1>
            </div>
            
            <br />

            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleIcon />} className={classes.button}>
            Top-up
            </Button>

            <Button variant="contained" color="primary" size="large" startIcon={<LocalAtm />} className={classes.button}>
            Withdraw
            </Button>
            
            <TransactionList transactions={props.transactions} />

            <br />
            <IconButton aria-label="add to shopping cart">
                <div className={classes.back_button_div}>
                    <ArrowBackRoundedIcon className={classes.back_icon} fontSize="large"/>    
                </div>
            </IconButton>
        </div>
    )
}