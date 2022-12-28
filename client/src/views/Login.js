import axios from 'axios'
import React, {useState} from 'react'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const Register = (e) => {
        e.preventDefault()
        axios.post('https://localhost:8000/api/user/create')
    }

    return (
        <div className='container'>

            <div className='navbar w-50 d-flex mx-auto bg-info p-4 mb-4 border border-dark rounded-5 justify-content-center'>
                <h1>Facted Up</h1>
            </div>

            <div className='w-50 mx-auto d-flex justify-content-around'>

                <form onSubmit={Register} className='d-flex flex-column align-items-center'> 
                    <h4>Register Your Account!</h4>
                    <label htmlFor='username'>Username: </label>
                    <input name='username' onChange={(e) => setUsername(e.target.value)}></input>
                    <label htmlFor='password'>Password: </label>
                    <input name='password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='m-2 rounded-3'>Register</button>
                </form> 

                <div className='d-flex flex-column align-items-center'>  
                    <h4>Coming Back?</h4>
                    <label htmlFor='username'>Username: </label>
                    <input name='username'></input>
                    <label htmlFor='password'>Password: </label>
                    <input name='password'></input>
                    <button  className='m-2 rounded-3'>Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login