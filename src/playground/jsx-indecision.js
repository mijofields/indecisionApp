console.log(`App.js is on fire`);

//JSX - JavaScript XML



const app = {
    title: "Indecision App:",
    subtitle: "Let the computer decide...",
    options: []
}

const handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
         app.options.push(option);
         e.target.elements.option.value = '';
         renderApp();
    }
}

const handleRemoveAll = () => {
    app.options = [];
    renderApp();
    }

    const onMakeDecision = () => {

        let randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
        alert(option);

    }

const appRoot = document.getElementById('app');

const renderApp = () => {

    const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : "No options" }
    <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={handleRemoveAll}>RemoveAll</button>
    <ul>{
        app.options.map((v, i) => {
            
           return <li key={i}>{v}</li>
           })
    }</ul>
        

    <form onSubmit={handleSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>

    </form>
   
    </div>
)

ReactDOM.render(template, appRoot);


}




renderApp();




