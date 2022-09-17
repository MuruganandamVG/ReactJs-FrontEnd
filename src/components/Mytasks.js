import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useCookies} from 'react-cookie';
function File() {
    const [data,setData]= useState([])
    const [token,removeToken] = useCookies(['mytoken'])
    useEffect(() => {

    fetch('http://127.0.0.1:8000/Fileview',{
      'method':'GET',
      headers:{
        'Content-Type':'application/json',
       
      }
    }
    )
     .then(resp => resp.json())
     .then ( resp => setData(resp)
    )
     .catch(error => console.log(error))
    },[token])
    return (
       < div>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></link>
        <header>
            <nav id='header-nav' className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-brand">
                        <h1 style={{color: "white"}}> My Tasks</h1>
    
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/dashboard">Back</a>
                        </li>
                       
                      </ul>
    
                </div>
    
            </nav>
            
        </header>
        <div className="table-responsive col-md-12">
            
          <table id="tablesize" className="table table-striped  border">
              <thead>
                <tr id="heading">
                <th scope="col">S.No</th>
                  <th scope="col">FileName</th>
                  <th scope="col">Status</th>
                  <th scope="col">Assigned to</th>
                  <th scope="col">Created by</th>
                </tr>
              </thead>
              {data.map((item, i) => (
                        <tr key={i}>
                          <td>{item.id}</td>
                            <td>{item.Filename}</td>
                            <td>{item.status}</td>
                            <td>{item.Createdby}</td>
                            <td>{item.Assignedto}</td>
                        </tr>
                    ))}
            </table>

        </div>
       </div>

    
    );
  }
  
  export default File;
  