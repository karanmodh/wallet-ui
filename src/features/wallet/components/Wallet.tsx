import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalAtm from '@material-ui/icons/LocalAtm';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
        minWidth: 150
    },
    transaction_card: {
        backgroundColor: "lightgray",
        minWidth: 300,
        maxWidth: "max-content",
        margin: "auto",
        marginTop: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "10px"
    },
    wrapper: {
        display: "flex",
        textAlign: "center",
        margin:"auto"
    },
    uparrow_icon: {
        paddingLeft: "20px",
        margin: "auto",
        color: "darkgreen"
    },
    downarrow_icon: {
        paddingLeft: "20px",
        margin: "auto",
        color: "darkred"
    },
    data: {
        paddingRight: "20px",
        paddingLeft: "20px",
        margin: "auto"
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

interface transactionProp {
    amount: number,
    type: boolean
}

export interface walletDetailsProp {
    name: string,
    amount: number,
    transactions?: transactionProp[]
}

const TransactionCard = (props: transactionProp) => {
    const classes = useStyles();

    return (
        <Card className={classes.transaction_card} variant="outlined" >
            <div className={classes.wrapper}>
                <div className={classes.wrapper}>
                    {props.type?<ArrowUpwardRoundedIcon fontSize="large" className={classes.uparrow_icon} />:<ArrowDownwardRoundedIcon fontSize="large" className={classes.downarrow_icon} />}
                </div>
                
                <Divider orientation="vertical" flexItem />

                <div className={classes.wrapper}>
                    <h2 className={classes.data}><i className="fa fa-inr"></i> {props.amount}</h2>
                </div>
            </div>
        </Card>
    )
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
            <div>
                {props.transactions?.map((transaction, index) => {
                    return <TransactionCard key={index} amount={transaction.amount} type={transaction.type} />
                })}
            </div>

            <br />
            <IconButton aria-label="add to shopping cart">
                <div className={classes.back_button_div}>
                    <ArrowBackRoundedIcon className={classes.back_icon} fontSize="large"/>    
                </div>
            </IconButton>
        </div>
    )
}