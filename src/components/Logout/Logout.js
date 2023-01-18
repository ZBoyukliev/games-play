import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService'
import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext)

    useEffect(() => {
        authService.logout(user.accsessToken)
        .then(() => {
            userLogout()
            navigate(`/`)
        })
        .catch(() => {
            navigate(`/`)
        })
    })

    return null
};