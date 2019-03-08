import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    
    handleAddOption = (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        let error = this.props.handleAddOption(option);
        //only updates the error if an error value is returned from parent
        this.setState(() => ({error }));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
        
    };
    
    render (){
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option"
                onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    };
}