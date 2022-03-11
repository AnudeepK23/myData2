import React, { Component } from 'react';
import axios from 'axios'

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            std:[],
            errors:''
         }
    }

    componentDidMount(){
        axios.get('http://localhost:8899/Students')
        .then( res =>{
            console.log(res.data);
           this.setState({
               std:res.data
           })
        })
        .catch(error =>{
           console.log(error)
           this.setState({
               errors:'unable to fetch data'
           })
        })
    }

    render() { 

        const{std,errors} =this.state

        return ( 
            <div>
                    Students List
                    { std.length ? std.map(stds => <div key={stds.id}> {stds.id} | {stds.name} | {stds.city} </div>) : null}
                    { errors ? <h2>{errors}</h2> : null}    
              </div>    
         );
    }
}
 
export default Students;