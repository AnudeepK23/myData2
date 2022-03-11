import React, { Component } from 'react';
import axios from 'axios';



 class Signup extends Component {
     constructor(props) {
         super(props);
     
         this.state = {
             id:0,
             firstName:'',
             lastName:'',
             email:'',
             password:''
              
         }
     }

     handleChange = event =>{
         this.setState=({[event.target.name]:event.target.value})
     }

     handleSubmit = event =>{
         axios.post('http://localhost:3303/bankapi/register',this.state)
         .then(res =>{
             console.log(res.data)
         })

         .catch(err =>{
             console.log(err)
         })
     }
     
    render() {
        const{firstName,lastName,email,password} = this.state;
    //  const{register,errors}=this.props;
    //  console.log(errors)

        return (
            <div>
              
              
               <section className="vh-100" style={{backgroundColor: '#eee'}}>
                  <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: '25px'}}>
                          <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                <div>

                                <form className="mx-1 mx-md-4" onSubmit={this.handleSubmit} >
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                    <label className="form-label" htmlFor="form3Example1c">First Name</label>
                                   
                                    <div className="form-outline flex-fill mb-0">
 
                                      <input type="text" name ="firstName"  className="form-control" id="form3Example1c" value={firstName} onChange={this.handleChange}  />
                                      
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                    <label className="form-label" htmlFor="form3Example2c">Last Name</label>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="text" name ="lastName" className="form-control" id="form3Example2c"  value={lastName} onChange={this.handleChange} required="required" />
                                      
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="email" name="email"  className="form-control" id="form3Example3c"  value={email} onChange={this.handleChange} required="required"  />
                                      
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="password" name="password" className="form-control" id="form3Example4c"  value={password} onChange={this.handleChange} required="required" />
                                     
                                    </div>
                                  </div>
                                  {/* <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-mobile fa-lg me-3 fa-fw" />
                                    <label className="form-label" htmlFor="form3Example4cd">Mobile Number</label>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="tel" pattern="^\d{10}$" id="form3Example4cd" className="form-control" required="required" />
                                     
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-map-marker fa-lg me-3 fa-fw" /> <label className="form-label" htmlFor="form3Example4cd">Select Place</label>
                                    <div className="form-outline flex-fill mb-0">
                                    <div class="mb-4">

<select class="select">
  <option value="1" > Select State</option>
  <option value="2">Karnataka</option>
  <option value="3">Andhra Pradesh</option>
  <option value="4">Tamil Nadu</option>
  <option value="5">Kerala</option>
  <option value="6">Maharashtra</option>
</select>

</div>
                                     
                                     
                                    </div>
                                  </div> */}
                                  <div className="form-check d-flex justify-content-center mb-5">
                                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                      I agree all statements in <a href="#!">Terms of service</a>
                                    </label>
                                  </div>
                                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <input type="submit" value="register" className="btn btn-primary btn-lg" />
                                    <input type="reset" value="cancel" className="btn btn-primary btn-lg" />
                                  </div>
                                  
                           
                              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                              </div>
                              </form>
                              </div>
                              
                              </div>
                              
                            </div>
                            
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </section>
 

            </div>
        )
    }
}

export default Signup
