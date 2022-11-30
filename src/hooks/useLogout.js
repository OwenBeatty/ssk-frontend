import { useAuthContext } from "./useAuthContext";
import { useGamesContext } from "./useGamesContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: gamesDispatch } = useGamesContext();

    const logout = () => {
        //remove from localstorage
        localStorage.removeItem("user");

        //dispatch logout action
        dispatch({ type: "LOGOUT" });
        gamesDispatch({ type: "SET_GAMES", payload: null });
    }

    return { logout }
}