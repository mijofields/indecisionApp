//JSX - JavaScript XML

// const app = {
//     title: "Indecision App:",
//     subtitle: "Let the computer decide...",
//     options: ['One', 'Two']
// }

const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? <p>Here are your options: {app.options}</p> : "No options" }</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
            <li>Fuck you Aaron</li>
        </ol>
</div>
);

// const user = {
//     name: "Mike Fields",
//     age: 17,
//     location: "Dallas, TX"
// }

// function getLocation (location) {

//     if (location) {
//     return <p>Location: {location} </p>;
//     }
// }

// const template2 = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1> 
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);