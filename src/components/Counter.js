import React from "react";

export class Counter extends React.Component{

    //declaracion de los states
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            show: true
        }

        //this.incrementar = this.incrementar.bind(this);
        //this.decrementar = this.decrementar.bind(this);
    }

    incrementar = () =>{
        this.setState({
           contador: this.state.contador + 1,
        });
    }

    decrementar = () =>{
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    //montar el componente
    componentDidMount(){
        
    }

    //actualizar el componente
    componentDidUpdate(){
       if(this.state.contador <= 0){
          /*  this.setState({
               show: false
           }) */
           console.log(this.state.contador <= 0);
       }

    }

    componentWillUnmount(){
       
    }


    //renderizar el componente
    render(){
        return(
            <>
            <h1>Uso de clases y super props</h1>
                <h1>{`${this.props.texto}: ${this.state.contador}`}</h1>
                <button className='btn btn-info mr-3' onClick={this.incrementar} >Incrementar</button>
                <button className='btn btn-warning' onClick={this.decrementar} >Decrementar</button>
                <hr className='bg-info' />
            </>
        )
    }


}
