import React from 'react'
import '../Components/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faTwitter}    from '@fortawesome/free-solid-svg-icons'


const  footer=()=> {
  return (
    
    <div className='container-fluid  center '>
         <div className="row justify-content-between  ">
             <div className="col-md-4  col-sm-12 Section-1  ">
                 <div className="Sub_Section_1    ">
                     <div className="  title h4 pt-5  text-sm-left ">
                         <h1 >About</h1>
                     </div>
                     <div className="content h5"> 
                          <a href='#' class="text-decoration-none text-sm-left"><p> About us</p></a>
                          <a href='#'class="text-decoration-none text-sm-left"><p>Annual Report</p></a>
                     </div>
                </div>
               <div className="Sub_Section_2  ">
                    <div className="title h4 pt-4 text-sm-left">
                         <h1>Organisations</h1>
                    </div>
                     <div className="content h5"> 
                         <a href='#' class="text-decoration-none text-sm-left"><p> Youth</p></a>
                         <a href='#' class="text-decoration-none text-sm-left"><p>Youth 4 Global Goals</p></a>
                         <a href='#' class="text-decoration-none text-sm-left "><p>Youth Speak</p></a>
                      </div>
                 </div>
             </div>

          <div className="col-md-4  col-sm-12 Section-2 ">
              <div className="Sub_Section_1">
                  <div className="title h4  pt-5 text-sm-left">
                     <h1>Youth</h1>
                  </div>
                <div className="content h5"> 
                    <a href='#' class="text-decoration-none text-sm-left"><p> Partner with us</p></a> 
                      <a href='#' class="text-decoration-none text-sm-left"><p>Pricing</p></a>
                </div>
                 </div>
                <div className="Sub_Section_2">
                     <div className="title h4 text-sm-left">
                          <h1>Membership</h1>
                     </div>
                      <div className="content h5"> 
                            <a href='#' class="text-decoration-none text-sm-left"><p>Join Us</p></a>
                            <a href='#' class="text-decoration-none text-sm-left"><p>Find your country!</p></a>
                     </div>
                 </div>
          </div>
       <div className="col-4 Section-3 col-md-4  col-sm-12  ">
               <div className="Sub_Section_1">
                     <div className="title h4 pt-5 text-sm-left">
                        <h1>NEWSLETTER</h1>
                     </div>
                     <div className="content h5 text-sm-left"> 
                          <p> Stay update with last offers and news</p> 
                      </div>
                 <form>
                     <div className=' row  container'>
                          <div class="form-group col-6 col-sm-6 ">
                               <input  type="text" placeholder='Enter your Email' />
                          </div>
                          <div class="form-group col-6 col-sm-6 ">
                              <button className='btn btn-primary h-100 w-50 '>Send</button>
                          </div>
                     </div> 
                </form>
        </div>
     <div className="row">
          
        <div class="col-md-6 text-md-end">
        <ul class="list-unstyled">
          <li><a href="#"></a></li>
          <li><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin fa-lg"></i></a></li>
        </ul>
      </div>
        </div>
      </div>
     
    </div>

  <div class="row d-flex justify-content-between">
  <div className="col-12 copyright text-center"><p>©  1948-2022 AIESEC</p></div>

  </div>
    
  </div>
  )}

export default footer

