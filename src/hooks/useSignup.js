import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (username, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://average-tank-top-moth.cyclic.app/api/user/signup", {
            mode: "cors",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, password })
        });
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok) {
            //save user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            //update auth context
            dispatch({ type: "LOGIN", payload: json });

            setIsLoading(false);
        }
    }

    return { signup, isLoading, error }
}