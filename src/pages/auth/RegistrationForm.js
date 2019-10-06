import React from "react";
export const RegistrationForm = (props) => {
    const {onSubmit} = props;
    return (
        <>
            <div>
                <form method={"post"} onSubmit={()=>{onSubmit()}}>
                    <div>
                        <input type={"email"} id/>
                    </div>
                </form>
            </div>
        </>
    );
};

