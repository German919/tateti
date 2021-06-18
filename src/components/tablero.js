import React,{Component} from "react";
import Casilla from "./casilla";
class Tablero extends Component {

    renderCasilla(i){
        return <Casilla value={this.props.squares[i]} onClick={()=>this.props.onClick(i)} />
    }

    render(){

        return (
            <div className="container w-100">
                <div className="row">
                    <div className="col-4">{this.renderCasilla(0)} </div>
                    <div className="col-4">{this.renderCasilla(1)}</div>
                    <div className="col-4">{this.renderCasilla(2)}</div>
                </div>
                <div className="row">
                    <div className="col-4">{this.renderCasilla(3)} </div>
                    <div className="col-4">{this.renderCasilla(4)}</div>
                    <div className="col-4">{this.renderCasilla(5)}</div>
                </div>
                <div className="row">
                    <div className="col-4">{this.renderCasilla(6)} </div>
                    <div className="col-4">{this.renderCasilla(7)}</div>
                    <div className="col-4">{this.renderCasilla(8)}</div>
                </div>
            </div>
        )
    }
}

export default Tablero;