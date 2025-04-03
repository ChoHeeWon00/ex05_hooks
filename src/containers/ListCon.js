import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { initalState, reducer } from "../moduls/member_red";
import { getList } from "../service/member";

function ListCon() {
  const [state, dispatch] = useReducer(reducer, initalState);
  //const [data, setData] = useState();
  useEffect( ()=> {
    //setData( 서버 데이터 저장 )
    const data = getList();
    dispatch({type:"LIST", data})
  }, [] )
  console.log("state : ", state)
    return (<>
      <ListCom data = {state.data} />
      </>);
  }
  export default ListCon;