import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    const classes = useStyles();
    return (
        <div >
            <br />
            <div className={classes.form_box}>
                <TextField label="Name" variant="outlined" size="small" className={classes.text_input} />
                <TextField label="amount" variant="outlined" size="small" className={classes.text_input} />
                <Button variant="contained" color="primary" size="medium" startIcon={<AddCircleIcon />} className={classes.button}>
                add
                </Button>
            </div>
        </div>
    )
}

export const WalletCreateForm = () => {
    const classes = useStyles();
    const displayForm = true;

    return (
        <div>
            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleIcon />} className={classes.button}>
            Create
            </Button>
            {displayForm?<AdditionForm />:<div></div>}
        </div>
    )
}