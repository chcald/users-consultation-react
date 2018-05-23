'use strict'

import React from 'react';
import { create } from 'apisauce'

const api = create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Accept': 'application/json'}
})
let obj

// https://www.andreasreiterer.at/web-development/connect-react-app-rest-api/

export default class ConsultResult extends React.Component {
    constructor() {
        super();
        this.state = []
        // this.state.workOrder = ''
    }
    componentDidMount() {
        // this.search()
    }

    search = () => {
        api
        .get(`/users`)
        .then((response) => {
            let msg = response
            this.setState({ ['result']: msg} );
        })
        .then(console.log)
    }

    handleChange = param => e => {
        const value = e.target.value;
        this.setState({ ['workOrder']: value });
        console.log("value: ", value)
        console.log(this.state)
      };

    render() {
        return (<div>
            <br/>
            <br/>
            <label> To search: {this.workOrder} </label>
                    <input
                        type="text"
                        value={this.state["workOrder"]}
                        onChange={this.handleChange(obj)} />
                        <br/>
                        <button className='btn btn-red my-button' onClick={this.search} >Consultar usuarios</button>
                    <br/>
                    <div>
                        <br/>
                        <div> Consultation result: </div> {
                            JSON.stringify(this.state.result)} { /* { this.state.items.map(item=> { return <div>item</div>}) }           */}
                    </div>  
                </div>
    );
}
}