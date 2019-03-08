class IndecisionApp extends React.Component{
    
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options){
            this.setState(() => ({options: options}));        
        }

        } catch (e) {
            //do nothin fall back to default []
        }
}

    componentDidUpdate (prevProps, prevState){
        if (prevState.options.length !== this.state.options.length ){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
           

        }

        

    }

    componentWillUnmount (){

        console.log(`component will unmount`);

    }

    handleDeleteOptions(){
        this.setState(() => ({ options: []}));
    }

    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handleMakeDecision(){

        let randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    };

    handleAddOption(option){
        //validation included in parent function which only returns error values, otherwise no response

        if (!option){
            return 'Please enter an option';

        } else if (this.state.options.indexOf(option) > -1) {

            return 'This appears to already to included, enter a new value';
        };

        
            this.setState((prevState)=> ({options: [...prevState.options, option]}));
                    
        };
                     
       


    render(){
        const subtitle = 'Let the computer decide'

        return (            
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                handleMakeDecision={this.handleMakeDecision} 
                />
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
                )
    };
}

// IndecisionApp.defaultProps = {

//     options: []
// }

//stateless functional comppnent
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
        )

};

Header.defaultProps = {

    title: 'Indecision App',
}

// class Header extends React.Component {
//     render(){
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//         )
//     };
// }

//stateless functional comppnent
const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
     )

};

// class Action extends React.Component{


    
//     render () {
//          return (
//             <div>
//                 <button 
//                 onClick={this.props.handleMakeDecision}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//          )
//     };
// }

//stateless functional comppnent
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length > 0 ? <h3>Here are your options:</h3> : <h3>Please add an option to get started</h3>}
                <ol>
                {props.options.map((v, i) =>(
                    <Option 
                    key={i} 
                    optionText={v}
                    handleDeleteOption={props.handleDeleteOption} />
                    ))
                }
                </ol>           
        </div>
    )

};

// class Options extends React.Component {
//     render (){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.length > 0 ? <h3>Here are your options:</h3> : <h3>No Options</h3>}
//                     <ol>
//                     {this.props.options.map((v, i) =><Option key={i} optionText={v} />)}
//                     </ol>           
//             </div>
//         )
//     };
// }

//stateless functional comppnent
const Option = (props) => {
    return (                   
        <li>{props.optionText}
        <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}>
        Remove
        </button>
        </li>      
     );

};

// class Option extends React.Component{
//     render (){
//         return (
                   
//             <li>{this.props.optionText}</li>            
        
//         )
//     };
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
                error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        let error = this.props.handleAddOption(option);
        //only updates the error if an error value is returned from parent
        this.setState(() => ({error }));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
        
    }
    
    render (){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    };
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));