import Axios  from "axios"
import { AppContext } from "../contexts/Context.jsx"

const port = 5000
const localhost = `http://localhost:${port}`

export class AxiosUser{
    async AxiosGet(){
        Axios.get('http://localhost:5000/user/get').then((response) => {
            setUsuarios(response.data)
        })
    }

    async AxiosLogin(email, senha) {
        try {
            const test = Axios.post(`${localhost}/user/login`, {
                    email: email,
                    senha: senha
                }).then((response) =>{
                    if(response.data.length){
                        if (email == response.data[0].email && senha == response.data[0].senha){
                            localStorage.setItem('UserConnection', JSON.stringify(response.data[0]))
                            window.location.replace('/', {replace: true})
                        } else {
                            AppContext.test = false
                        }
                    } else {
                        alert('anger the phoenix, and feel its talons')
                    }
            })

        }
        catch (err) {
           alert(err)
        }
    }
}