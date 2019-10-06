import React from "react";
import "./login.css"
import {LoginForm} from "./Login";
import {loginUser} from "../../redux/actions/authActions";

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isLogin: false,
            loading: false,
            data: {
                mobile: "",
                password: ""
            }
        }
    }

    onSubmit=()=>{

        const param = {
            mobile: this.state.data.mobile,
            password: this.state.data.password
        };

        this.setState({
            loading: true
        });

        loginUser(param,(status,data)=>{
            if(status){
                this.setState({
                    loading: false,
                });
                localStorage.setItem('user', JSON.stringify(data.reviewer));
                window.location.href="/transactions"
            }else{
                this.setState({
                    loading: false,
                    error: true,
                    err: data
                })
            }
        })
    };

    onChange = (e)=>{
        let {data }= this.state;

        data[e.target.name]= e.target.value;

        this.setState({
            data
        })
    };

    render() {
        return (
            <>
            <LoginForm onChange={this.onChange} loading={this.state.loading} value={this.state.data} onSubmit={this.onSubmit}/>
            </>
        )
    }
};

export default Login;
