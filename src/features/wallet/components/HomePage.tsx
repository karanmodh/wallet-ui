import { WalletCreateForm } from './WalletCreateForm';
import { WalletList } from './WalletListCard';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchWallets, getShowWallets, toggleShowWallets } from '../actions/walletAction';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  show_hide_bar: {
    borderRadius: "10px",
    padding: "10px",
    width: "550px",
    margin: "auto",
    backgroundColor: "lightgray",
    textAlign: "left"
  }
})

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const showWallets = useAppSelector(getShowWallets);
    const classes = useStyles();

    const handleClick = () => {
      if(!showWallets){
        dispatch(fetchWallets());
      }
      dispatch(toggleShowWallets(!showWallets));
    }

    return (
      <div>
        <WalletCreateForm />
        <br />
        <div className={classes.show_hide_bar} onClick={()=>handleClick()}>
          {showWallets?<div style={{display:"flex"}}><ArrowDropDownIcon /> <span>Hide</span></div>:<div style={{display:"flex"}}><ArrowRightIcon /> <span>Show</span></div>}
        </div>
        {showWallets?<WalletList />:<div></div>}
      </div>
    )
}