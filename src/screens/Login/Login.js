import React, { useState}from 'react';
import Title from './Title/Title';
import Label from './Label/Label';
import Input from './Input/Input';
//style
import './Login.css';
import './Input/Input.css';
import './Label/Label.css';
const Login = ()=>{

    //use state
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passError,setPassError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    //in case that the name of user doesn't exist in the local storage
    const [hasError, setHasError] = useState(false);

    function handleChange(name,value){
        if(name == 'usuario'){
            //update state
            setUser(value);
            setHasError(false);
        }
        else{
            if(value.length < 8){
                setPassError(true);
                setHasError(false);
            }
            else{
                setPassError(false);
                setPassword (value);
                setHasError(false);
            }
            
        }
    };
    //look if the account make match with some account that exist on local storage
    const ifMatch =(params)=>{
        if(params.user.length > 0 && params.password.length > 0){
            if(params.user == 'brayan' && params.password == '12345678'){
                const {user, password} = params;
                let sacandoParamsDelObjeto = {user, password};
                let account = JSON.stringify(sacandoParamsDelObjeto); //Covirtiendo varianle a tipo de dato json
                localStorage.setItem('account',account);
                setIsLogin(true);
            } else{
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(false);
        }
    }
    function handleSubmit(){
        let account = {user, password};
        if(account){
            ifMatch(account);
        }
    };

    return(
        <div className = "loginContainer">
            {isLogin ? 
            <div>
                <h1>Bienvenido</h1>
                <label>ejemplo de login hardcodeado XD</label>
            </div>
            :
            <div className = "loginContent">
            <Title text="Login"/>
            {
                hasError &&
                <label className ="hasErrorLabel">El nombre de usuario o contraseña no existe en nuestra base de datos</label>
            }
            <Label text = "usuario"/>
            <Input
            attribute = {{
                id : 'usuario',
                name :'usuario',
                type : 'text',
                placeholder : 'ingrese nombre usuario',
            }}
            handleChange = {handleChange}
            />
            <Label text = "contraseña"/>
           <Input
            attribute = {{
                id : 'contraseña',
                name : 'contraseña',
                type : 'password',
                placeholder : 'ingrese la contraseña',
            }}
            params = {passError}
            handleChange = {handleChange}
           />
           {
               passError &&
               <label className="labelError">Contraseña invália o incompleta</label>
           }
           
           <button className = "buton" onClick = {handleSubmit}> Ingresar</button>
            </div>
            }
        </div>
    )
};

export default Login;