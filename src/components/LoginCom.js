function LoginCom({ username, password, onChange}) {
    return (<>
      <input type="text" name="id" value={username} onChange={onChange} placeholder="아이디" /><br />
      <input type="text" name="pwd" value={password} onChange={onChange} placeholder="비밀번호" /><br />
      </>);
  }
  export default LoginCom;