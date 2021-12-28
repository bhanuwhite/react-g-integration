import React from 'react'
import githubIMG from "../images/github.png";
import "../dashboard/Dashboard.css"
const Github = () => {                                           
    return (      
        <div>       
            <h3>Github</h3>               
            <div className='row'>                  
                <div className='col-xl-6'>                                           
                    <div className='git-details p-3'>
                        <div className='d-flex  justify-content-between'>       
                            <div className='user-name'>
                                <h4>Robartray0125</h4>
                                <span>robartray0125@gmail.com</span>
                            </div>
                            <div className='git-image'>
                                <img src={githubIMG} alt="" />                                      
                                              
                            </div>                                                     
                        </div>
                        <div className="cardDivider my-3"></div>
                        <div className='gitrepo'>                                          
                            <h5 className='border-bottom-2 mb-4'>Repositories :</h5>                     
                            <div className='repo-name'>
                                <h5><a href='#'>1. Robartray0125/Dashboard</a></h5>
                                <h5><a href='#'>2. Robartray0125/UI</a></h5>
                                <h5><a href='#'>3. Robartray0125/Facebook</a></h5>
                                <h5><a href='#'>4. Robartray0125/React-g-integration</a></h5>
                                <h5><a href='#'>5. Robartray0125/Rowlin.scss</a></h5>
                                <h5><a href='#'>6. Robartray0125/gulp-project</a></h5>
                            </div>
                            <button            
                                type="button"     
                                className="btn btn-success mt-3"
                                id="#"  
                                >
                                Open Github                                                                               
                            </button>
                        </div>
                    </div>
                       
                                          
                </div>
               
            </div>
        </div>
    )
}

export default Github                              


                

                                        


