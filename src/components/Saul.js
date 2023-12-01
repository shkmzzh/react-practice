import { Component } from "react";
import Rose from "./Rose";
export default class Saul extends Component{
    kunkun(){
        console.log('我被调了')
        console.log(this.props.children)
    }
    render(){
        return(
            <div>saul{this.props.Msg}
            <hr />
            6666666666666666
           <h1>
           {this.props.children}
           </h1>
            
            <Rose></Rose>
            </div>
        )
    }
}