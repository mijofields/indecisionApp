
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        
            let saveCount = parseInt(localStorage.getItem('count'));
                
            if (!isNaN(saveCount)){
            this.setState(() => ({count: saveCount}));
            }        
      

}

    componentDidUpdate (prevProps, prevState){
        if (prevState.count !== this.state.count ){
            let saveCount = this.state.count;
            localStorage.setItem('count', saveCount);           

        }

        

    }

    handleAddOne(){
        this.setState((prevState) => {
        return {
            count: prevState.count +1
        };
    });
}
            

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }


    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>

            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));

// let count = 0;
// const myId = "My_Button";
// const appRoot = document.getElementById('app');

// const addOne = () => {
//     count ++
//     renderCounterApp()
//     console.log(`addOne`, count)}

// const minusOne = () => {
//     count --
//     renderCounterApp()
//     console.log(`minusOne`, count)}

// const reset = () => {
//     count = 0
//     renderCounterApp()
//     console.log(`reset`, count)}



// const renderCounterApp = () => {

//     const template3 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={myId} className="button" onClick={addOne}>+1</button>
//             <button className="button" onClick={minusOne}>-1</button>
//             <button className="button" onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template3, appRoot);

// };

// renderCounterApp();