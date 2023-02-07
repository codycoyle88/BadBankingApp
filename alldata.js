const { useContext } = React;
function AllData(){
  const [visible, setVisible]   = React.useState(false);
  const ctx = React.useContext(UserContext);
  //let tempvar = 0;
  //tempvar = ctx.users[1].name;
  React.useEffect(() => {
    document.title = 'AllData'; 
  });


  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)};
    <div>
      <table id='TableA'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{ctx.users[0].name}</td>
              <td>{ctx.users[0].email}</td>
              <td>{ctx.users[0].password}</td>
              <td>{ctx.users[0].balance}</td>
            </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

