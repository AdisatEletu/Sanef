import React from "react";
import {RegistrationForm} from "./RegistrationForm";
import {getIdentityType, registerUser} from "../../Controller";


class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            identityType: [],
            values: {}
        }
    }

    componentDidMount() {
        getIdentityType((status, data)=>{
            if(status){
                this.setState({
                    identityType: data,
                    isLoading: false
                })
            }
        })
    }

    onChangeInput =(e)=>{
        let {values}= this.state;
        values[e.target.name] = e.target.value;
        this.setState({
            values
        })
    };

    onSubmit =(e)=>{
        e.preventDefault();
        const params = {
            values: this.state.values
        };
        this.setState({
            isRegistering: true
        });
        registerUser(params, (status,data)=>{
            if(status){
                this.setState({
                    isRegistering: false
                })
            }
        })
    }


    render() {
        const {identityType, isLoading,isRegistering} = this.state;
        return (
            <>
                <RegistrationForm isRegistering = {isRegistering} onChangeInput={this.onChangeInput} identityType={identityType} isLoading = {isLoading}/>
            </>
        );
    }
}


export default Registration;