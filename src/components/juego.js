import React,{Component} from "react";
import Tablero from "./tablero";
class Juego extends Component {

    constructor(props){
        super(props);
        this.state = {
            xIsNext : true,
            stepNumber : 0,
            history:[
                { squares : Array(9).fill(null)}
            ] 
        }
    }

    handleClear(){
        this.setState({
            stepNumber : 0,
            xIsNext : true,
            history:[
                { squares : Array(9).fill(null)}
            ] 
        }) 

    }
    
    junpTo(step){
        
        const stepCopy = step + 1;
        const stepHistory = this.state.history.slice(0,stepCopy);
        const current = stepHistory[stepHistory.length - 1];
        const squares = current.squares.slice();

        const history = this.state.history.slice(0,step);
         
        this.setState({
            history : history.concat({
                squares : squares
             }),
            xIsNext : (step%2) === 0,
            stepNumber : history.length
         }) 
         
    }
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if(winner || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        
        this.setState({
             history : history.concat({
                 squares : squares
             }),
             xIsNext : !this.state.xIsNext,
             stepNumber : history.length
        })
    }
    render(){

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move)=>{
            const description = move && "Ir a # " + move;
            if(move !== 0){
                return (
                    <li className="list-button" key={move}>
                        <button className="btn btn-primary border button-result" 
                            onClick={()=>{this.junpTo(move)}}>{description}
                        </button>
                    </li>
                )
            }   
           
        });

        let status;

        if(winner){
            status = "El ganador es " + winner;
        }else{
            status = "Próximo jugador " + (this.state.xIsNext ? "X" : "O"); 
        }
        
        return(
            <>
            <header>
                <h1 className="text-center title">TATETI</h1>
            </header>
            <div className="container mt-5 d-flex justify-content-center border p-5 bg-light">
                <div>
                    <Tablero onClick={(i)=> this.handleClick(i)} squares={current.squares} />
                </div>
                <div>
                    <div className="result">{status}</div>
                    <button onClick={()=>this.handleClear()} className="btn btn-primary border button-begin">Comenzar el Juego</button> 
                    <ul>{moves}</ul>
                </div>
            </div>
            </>
        )
    }
}

export default Juego;

const calculateWinner = (squares) => {

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a];           
        }       
    }   
    return null;
}