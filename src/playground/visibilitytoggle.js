class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleVisible=this.handleVisible.bind(this);
        this.state={
            visible:false
        };
    }
    handleVisible(){
        this.setState((prevState)=>{
            return{
                visible: !prevState.visible,
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleVisible}>
                    {this.state.visible?'hide data':'show data'}
                </button>
                {this.state.visible && <h1>content is visible</h1>}
            </div>
        );
     }
}

ReactDOM.render(<Visibility/>,document.getElementById('app'));