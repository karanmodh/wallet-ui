import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getShowForm, toggleWalletCreateForm } from '../actions/walletAction';
import { AdditionForm } from './AdditionForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
    },
  }),
);

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
            {showForm?<AdditionForm type="ADD"/>:<div></div>}
        </div>
    )
}