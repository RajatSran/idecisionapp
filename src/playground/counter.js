class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleSubOne=this.handleSubOne.bind(this);
        this.handlereset=this.handlereset.bind(this);
        this.state={
            count:0
        };
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1,
            }
        });
        console.log("handle add one");
    }
    handleSubOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1,
            }
        });
        console.log("handle sub one");
    }
    handlereset(){
        this.setState(()=>{
            return {
                count: 0,
            }
        });
        console.log("handle reset");
    }

    render(){
        return(
            <div>
                <h1>count :{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter/>, document.getElementById('app'));

