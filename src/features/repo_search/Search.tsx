import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {fetchRepos, selectRepos, selectUsername, getLoadingState, updateUsername} from "./SearchAction"
import RepoCard from "./RepoCard";
import Loader from "react-loader-spinner";

// CSS for Loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface repoDetailProp {
    id:number;
    name:string;
    description:string;
}

function Search() {
    const dispatch = useAppDispatch();
    const loadingState = useAppSelector(getLoadingState)
    const search = useAppSelector(selectUsername);
    const repos = useAppSelector(selectRepos);
    
    function handleSubmit(username:string){
        dispatch(fetchRepos(username));
    }

    function handleUsername(username:string){
        dispatch(updateUsername(username));
    }

    return (
        <div>
            <input value={search} onChange={e=> handleUsername(e.target.value)} />
            <button onClick={()=>handleSubmit(search)}>Submit</button>
            <hr/>
            {loadingState?<Loader type="ThreeDots" color="#00BFFF" height={75} width={75} />:<div></div> }
            {repos.map((repo:repoDetailProp) => <RepoCard key={repo.id} name={repo.name} description={repo.description}> </RepoCard>)}
        </div>
    );
};

export default Search;