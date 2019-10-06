import React from "react";
import PropTypes from "prop-types"

export default class Select extends React.Component{
    static propTypes = {
        className: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired
    }
    render() {
        const {value, type, style, id,onChange, name, placeholder} = this.props;
        return (
            <>
                <div className={"md-10"}>
                    <select id={id} value={value} name={name} placeholder={placeholder} className={"basic-input"} style={style} onChange={()=>{onChange()}}>
                        {React.Children.map(this.props.children, (option)=>{
                            console.log("options", option);

                            return <option value={option.props.value} disabled={option.props.disabled} >
                                {option.props.data}
                            </option>
                        })}
                    </select>
                </div>
            </>
        );
    }
}

