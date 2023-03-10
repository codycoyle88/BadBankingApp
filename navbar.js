function NavBar(){
  return(
    <>
    ]<nav className="navbar navbar-expand-xl navbar-light bg-info">
      <a className="navbar-brand text-light" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li> 
          <li>
            <a className="nav-link" href="https://github.com/codycoyle88/BadBankingApp">github.com/BadBankingApp</a>
          </li>         
        </ul>
      </div>
    </nav>
    </>
  );
}