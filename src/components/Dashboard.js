
import {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Dashboard() {
  const [token,removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()

  const logoutBtn = () =>{
    removeToken(['mytoken'])
    navigate('../')
    console.group("cookie deleted succesffully")


  }
  
  return (
    <header>
    <nav id='header-nav' className="navbar navbar-default">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0PN5ntl-mAj-Qd-ihMhevA9-HjOH_dDS_Q&usqp=CAU' height="50px" width="50px" style={{marginLeft: "20px"}}/>
        <div className="container">
          
          
            <ul className="navbar nav">
              

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/mytask">My Task</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Progress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Completed</a>
                </li>
               
              </ul>
              <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <button onClick={logoutBtn} class="btn btn-primary" aria-current="page" >Logout</button>
                      </li>
              </ul>

        </div>

    </nav>
    
</header>
   

  );
}

export default Dashboard;
