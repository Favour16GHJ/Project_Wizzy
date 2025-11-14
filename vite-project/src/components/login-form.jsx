// Understand how to manage form inputs using state (making them "controlled components"). Learn to handle the onChange event for capturing input and the onSubmit event for form submission.
// Hands-On: Create a simple login form with two inputs (Username and Password) and a submit button. Use separate useState variables for each input. On submission, prevent the default form behavior and display the collected username and password in an alert message (or console log).
// import { useState } from 'react';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Username: ${username}\nPassword: ${password}`);
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input
//                     type="text" 
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// }
// export default LoginForm;

// Understand how to manage form inputs using state (making them "controlled components"). Learn to handle the onChange event for capturing input and the onSubmit event for form submission.
// Hands-On: Create a simple login form with two inputs (Username and Password) and a submit button. Use separate useState variables for each input. On submission, prevent the default form behavior and display the collected username and password in an alert message (or console log).
import { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}
export default LoginForm;