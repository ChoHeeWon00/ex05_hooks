function RegCom({onChange, id, pwd, name, addr}) {
    return (<>
      <input type="text" name="id" value={id} onChange={onChange} placeholder="아이디" /><br />
      <input type="text" name="pwd" value={pwd} onChange={onChange} placeholder="비밀번호" /><br />
      
      <input type="text" name="name" value={name} onChange={onChange} placeholder="name" /><br />
      <input type="text" name="addr" value={addr} onChange={onChange} placeholder="addr" /><br />
     
      </>);
  }
  export default RegCom;