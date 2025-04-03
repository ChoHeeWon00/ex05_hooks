import LoginCom from "../components/LoginCom";
import { initalState, reducer } from "../moduls/member_red";
import { useReducer } from "react";
function LoginCon() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const onChange = (e) => {
    console.log("onChange e.target : ", e.target );
    const { name, value } = e.target;
    dispatch( {type:"CHANGE_INPUT",name,value, form:"login"} )
  }
  console.log("login con state : ", state );
  return (<>
      <LoginCom username={state.login.id} password = {state.login.pwd}
                onChange={onChange}/>
      </>);
  }
  export default LoginCon;