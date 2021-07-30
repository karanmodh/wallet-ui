import Card from "@material-ui/core/Card";
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import Divider from "@material-ui/core/Divider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    }
  }),
);


export interface transactionProp {
    amount: number,
    type: string
}

const TransactionCard = (props: transactionProp) => {
    const classes = useStyles();

    return (
        <Card className={classes.transaction_card} variant="outlined" >
            <div className={classes.wrapper}>
                <div className={classes.wrapper}>
                    {props.type==="CREDIT"?<ArrowUpwardRoundedIcon fontSize="large" className={classes.uparrow_icon} />:<ArrowDownwardRoundedIcon fontSize="large" className={classes.downarrow_icon} />}
                </div>
                
                <Divider orientation="vertical" flexItem />

                <div className={classes.wrapper}>
                    <h2 className={classes.data}><i className="fa fa-inr"></i> {props.amount}</h2>
                </div>
            </div>
        </Card>
    )
}

export const TransactionList = (props: {transactions?: transactionProp[]}) => {
    return (
        <div>
            {props.transactions?.map((transaction, index) => {
                return <TransactionCard key={index} amount={transaction.amount} type={transaction.type} />
            })}
        </div>
    )
}