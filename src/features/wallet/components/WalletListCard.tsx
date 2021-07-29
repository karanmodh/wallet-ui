import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Divider from '@material-ui/core/Divider';
import { walletDetailsProp } from './Wallet';

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        textAlign: "center",
        margin:"auto"
    },
    root: {
        backgroundColor: "lightgray",
        minWidth: 550,
        maxWidth: "max-content",
        margin: "auto",
        marginTop: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "10px"
    },
    data: {
        paddingRight: "20px",
        paddingLeft: "20px",
        margin: "auto"
    },
    wallet_icon: {
        paddingLeft: "20px",
        margin: "auto"
    },
    send_icon: {
        paddingRight: "20px",
        paddingLeft: "20px",
    }
});

const ListCard = (props: walletDetailsProp) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} variant="outlined" >
            <div className={classes.wrapper}>
                <div className={classes.wrapper}>
                    <AccountBalanceWalletIcon className={classes.wallet_icon} fontSize="large"/>
                    <h2 className={classes.data}>{props.name}</h2>
                </div>
                
                <Divider orientation="vertical" flexItem />

                <div className={classes.wrapper}>
                    <h2 className={classes.data}><i className="fa fa-inr"></i> {props.amount}</h2>
                </div>

                <Divider orientation="vertical" flexItem />
                
                <IconButton aria-label="enter" className={classes.send_icon} color="primary">
                    <SendIcon />
                </IconButton>
            </div>
        </Card>
    )
}

export const WalletList = () => {
    const wallet_list = [
        {
            "name": "Kim Wexler",
            "amount": 5000
        },
        {
            "name": "Walter White",
            "amount": 6500
        },
        {
            "name": "Gus Firing",
            "amount": 63400
        }
    ]

    return (
        <div>
            {wallet_list.map((wallet, index) => {
                return <ListCard key={index} name={wallet.name} amount={wallet.amount} />
            })}
        </div>
    )
}