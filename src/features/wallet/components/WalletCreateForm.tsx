import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addWallet, getInputAmount, getInputName, getShowForm, setInputAmount, setInputName, toggleWalletCreateForm } from '../actions/walletAction';

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

const AdditionForm = () => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const input_name = useAppSelector(getInputName);
    const input_amount = useAppSelector(getInputAmount);

    const handleInputName = (input_name: string) => {
        dispatch(setInputName(input_name));
    }

    const handleInputAmount = (input_amount: string) => {
        let amount = parseInt(input_amount);
        dispatch(setInputAmount(amount));
        dispatch(setInputName(""))
        dispatch(setInputAmount(0))
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
                <Button variant="contained" color="primary" size="medium" startIcon={<AddCircleIcon />} className={classes.button} onClick={() => handleWalletAddition()}>
                add
                </Button>
            </div>
        </div>
    )
}

export const WalletCreateForm = () => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const showForm = useAppSelector(getShowForm);
    
    const handleClick = () => {
        dispatch(toggleWalletCreateForm(!showForm));
    }

    return (
        <div>
            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleIcon />} className={classes.button} onClick={()=>handleClick()}>
            Create
            </Button>
            {showForm?<AdditionForm />:<div></div>}
        </div>
    )
}