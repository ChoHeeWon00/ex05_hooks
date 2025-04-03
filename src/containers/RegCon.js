import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalState, reducer } from "../moduls/member_red";
function RegCon() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const onChange = (e) => {
    const {value, name} = e.target;
    dispatch({type:"CHANGE_INPUT", name, value, form:"register"});
  }
  return (<>
      <RegCom onChange={onChange} id={state.register.id}
              pwd={state.register.pwd} name={state.register.name}
              addr={state.register.addr} />
      </>);
  }
  export default RegCon;