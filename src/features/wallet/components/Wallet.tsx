import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalAtm from '@material-ui/icons/LocalAtm';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { walletDetails } from "./WalletListCard"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
        minWidth: 150
    }
  }),
);

export interface history {
    transactions: {
        amount: number,
        type: boolean
    }[]
}

export const Wallet = (props: (walletDetails & history)) => {
    const classes = useStyles();
    const title = `${props.name}'s Wallet`;
    return (
        <div>
            <h1 style={{color:"#4B4968"}}>{title}</h1>
            <h1 style={{color:"#4B4968"}}><i className="fa fa-inr"></i> {props.amount}</h1>
            <br />

            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleIcon />} className={classes.button}>
            Top-up
            </Button>

            <Button variant="contained" color="primary" size="large" startIcon={<LocalAtm />} className={classes.button}>
            Withdraw
            </Button>
        </div>
    )
}