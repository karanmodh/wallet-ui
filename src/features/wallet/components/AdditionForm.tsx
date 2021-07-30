import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addTransaction, addWallet, getInputAmount, getInputName, setInputAmount, setInputName } from "../actions/walletAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
    },
    text_input: {
        margin: theme.spacing(1),
    },
    form_box: {
        margin: "auto",
        height: "70px",
        width: "max-content",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        verticalAlign: "middle"
    }
  }),
);

interface formType {
    id?: number,
    type: string
}

export const AdditionForm = (props: formType) => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const input_name = useAppSelector(getInputName);
    const input_amount = useAppSelector(getInputAmount);

    const func_to_call = () => {
        switch(props.type) {
            case "ADD":
                handleWalletAddition();
                return;
            default:
                handleTransaction();
                return;
        }
    }

    const handleTransaction = () => {
        dispatch(addTransaction(input_name, input_amount, props.type, props.id))
    }

    const handleInputName = (input_name: string) => {
        dispatch(setInputName(input_name));
    }

    const handleInputAmount = (input_amount: string) => {
        let amount = parseInt(input_amount);
        dispatch(setInputAmount(amount));
    }

    const handleWalletAddition = () => {
        dispatch(addWallet(input_name, input_amount))
    }

    return (
        <div >
            <br />
            <div className={classes.form_box}>
                <TextField value={input_name} label="Name" variant="outlined" size="small" className={classes.text_input} onChange={e => handleInputName(e.target.value)}/>
                <TextField value={input_amount} label="Starting Balance" variant="outlined" size="small" className={classes.text_input} type="number" onChange={e => handleInputAmount(e.target.value)}/>
                <Button variant="contained" color="primary" size="medium" className={classes.button} onClick={() => func_to_call()}>
                {props.type}
                </Button>
            </div>
        </div>
    )
}