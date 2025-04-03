import {Link} from 'react-router-dom';
function HeaderCom() {
    return (<>
      <Link to="/">HOME</Link> &nbsp;
      <Link to="/list">LIST</Link> &nbsp;
      <Link to="/login">LOGIN</Link> &nbsp;
      <Link to="/register">REGISTER</Link>
      <hr/>
      </>);
  }
  export default HeaderCom;