import Axios from 'axios';
import { useState } from 'react';

export const Token = 'UserConnection';

export function getToken(){
    let recup = localStorage.getItem(Token)
    const user = JSON.parse(recup)
    return user
}

export function TestAxios(nick){
        return (Axios.post(`http://localhost:5000/user/profile`, {
            nick: nick
        }))
}