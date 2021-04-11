import Token from "./Token";
import AppStorage from "./AppStorage"
class User
{
    login(data)
    {
        axios.post('/api/auth/login', data)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log('hi'))
    }

    responseAfterLogin(res)
    {
        // console.log('hello')
        const access_token = res.data.access_token
        const username = res.data.user

        if(Token.isValid(access_token)) {
            
            AppStorage.store(username, access_token)

            console.log(AppStorage.getUser());
            // window.location('/forum')
        }
    }
}

export default User = new User();