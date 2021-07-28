import { RootState } from "../../app/store";

export const FETCH_SEARCH_PENDING = 'FETCH_SEARCH_PENDING';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export function updateUsername(username:string){
    return {
        type: UPDATE_USERNAME,
        username: username
    }
}

function fetchSearchPending(username:string) {
    return {
        type: FETCH_SEARCH_PENDING,
        username: username
    }
}

function fetchSearchSuccess(username:string, repos:any) {
    return {
        type: FETCH_SEARCH_SUCCESS,
        username: username,
        repos: repos
    }
}

function fetchSearchError(error:any) {
    return {
        type: FETCH_SEARCH_ERROR,
        error: error
    }
}

export function fetchRepos(username:string) {
    return (dispatch: (arg0: { type: string; repos?: any; error?: any; }) => void) => {
        dispatch(fetchSearchPending(username));
        const url:string = `https://api.github.com/users/${username}/repos`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            setTimeout(function(){
                dispatch(fetchSearchSuccess(username, res));
            }, 750); 
            return res;
        })
        .catch(error => {
            dispatch(fetchSearchError(error));
        })
    }
}

export const selectRepos = (state: RootState) => state.search.repos;
export const selectUsername = (state: RootState) => state.search.username;
export const getLoadingState = (state: RootState) => state.search.loading;