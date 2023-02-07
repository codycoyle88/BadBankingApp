
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [count, setCount] = React.useState(0);
  const ctx = React.useContext(UserContext);
  const [amount, setAmount]         = React.useState('');
  //const amount = "";
  //const [show, setShow]         = React.useState(true);
  //const [status, setStatus]     = React.useState('');
  //const [name, setName]         = React.useState('');
  //const [email, setEmail]       = React.useState('');
  //const [password, setPassword] = React.useState('');
  //const ctx = React.useContext(UserContext);  
  //const withdrawAmount = useContext(UserContext);
  //{JSON.stringify(ctx.users[0].balance)}<br/></p></div>
    React.useEffect(() => {
      document.title = 'Withdraw'; 
    });

    function handlechange(){
      setStatus('Error: ' + 'Enter numbers only!');
        setTimeout(() => setStatus(''),3000);
        clearForm();
        alert('👋 Please only enter numerical values.')
        return false;
    }
    function validate(field, label){
      console.log(field);
      //Check to see if there is any value in the field. Error if not
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        clearForm();
        return false;
      }
      //Check to see if the value entered is a number, error if not
      else if (isNaN(+field)) {
        setStatus('Error: ' + 'Enter numbers only!');
        setTimeout(() => setStatus(''),3000);
        clearForm();
        alert('👋 Please only enter numerical values.')
        return false;
      }
      //Check is amount is larger than the balance available. 
      else if(field > parseInt(ctx.users[0].balance)){
        setStatus('Error: ' + 'Transaction failed');
        setTimeout(() => setStatus(''),3000);
        clearForm();
        return false;
      }
      //If the validation passes all tests, return success message and finish math.
      setStatus('Withdraw ' + 'Success!');
      setTimeout(() => setStatus(''),3000);
      clearForm();
      return true;
    }

    function handleButton(){
      //console.log(amount);
      if (!validate(amount,     'Withdraw amount')){    return};
      ctx.users[0].balance = parseInt(ctx.users[0].balance) - parseInt(amount);
      setShow(false);
      //clearForm();
    }    

  function clearForm(){
      setAmount('');
      setShow(true);
    }

      return (
        <Card 
          bgcolor="secondary"
          header="Withdraw" bscolor="dark"
          
          status={status}
          body={show ? (  
              <>
                <div><p>Balance: {JSON.stringify(ctx.users[0].balance)}</p>
                <input type="input" className="form-control" id="amount" placeholder="Withdraw amount" value={amount} onChange={e => !isNaN(+e.currentTarget.value) ? (setAmount(e.currentTarget.value)):(handlechange()) }/><br/><br/>
                <p><button disabled={!amount} className="btn btn-dark" onClick={handleButton}>Withdraw</button><br/></p></div>
              </>
          ):(
              <>
              <div><p>Balance: {JSON.stringify(ctx.users[0].balance)}</p>
                <input type="input" className="form-control" id="amount" placeholder="Withdraw amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/><br/>
                <p><button disabled={!amount} className="btn btn-dark" onClick={handleButton}>Withdraw</button><br/></p></div>
              </>
          )}
        />
      )
  }
