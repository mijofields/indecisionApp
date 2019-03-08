import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{

    state = {
        options: [],
        selectedOption: undefined
    }

    handleAddOption = (option) => {
        //validation included in parent function which only returns error values, otherwise no response
        if (!option){
            return 'Please enter an option';

        } else if (this.state.options.indexOf(option) > -1) {

            return 'This appears to already to included, enter a new value';
        };        
            this.setState((prevState)=> ({options: [...prevState.options, option]}));                    
        };
        
    handleDeleteOptions = () => {
            this.setState(() => ({ options: []}));
        };


    handleDeleteOption = (optionToRemove)=>  {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handleMakeDecision = () => {

        let randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(( ) => ({selectedOption: option}));

    };
    
    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

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
    };

    componentDidUpdate (prevProps, prevState){
        if (prevState.options.length !== this.state.options.length ){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);          

        }       

    };

     render(){
        const subtitle = 'Let the computer decide'

        return (            
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                    handleMakeDecision={this.handleMakeDecision} 
                    />
                    <div className="widget">
                        <Options options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal
                selectedOption={this.state.selectedOption}
                handleCloseModal={this.handleCloseModal} />
            </div>
                )
    };
};



