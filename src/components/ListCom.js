function ListCom( { data } ) {
  return (<>
    {data && data.map( d=>
      <div key={d.id}>
        <span>{d.id}</span><br/>
        <span>{d.name}</span><br/>
        <span>{d.addr}</span><br/>
      </div>
    )}
    </>);
}
export default ListCom;