export const Token = 'UserConnection';

export function getToken(){
    let recup = localStorage.getItem(Token)
    const user = JSON.parse(recup)
    return user
}

export function removeToken(){
    let recup = localStorage.removeItem(Token)
    window.location.replace('/')
}