import { useState } from 'react'
function UseState() {
    const [number, changeNumber] = useState(0)
    const [names, setNames] = useState(["Alice", "Bob", "Charlie"]);


    const handleDecrement = (e) => {
        console.log(e.target.id);
        changeNumber((number) => number - 1);
    }
    const handleAddName = () => {
        const input = document.getElementById("nameInput");
        const newName = input.value.trim();//
        if (newName) {
            setNames((names) => [...names, newName]);
            input.value = ""; // Clear the input field
        }
    }
    //  Create a state variable that is an array of strings (e.g., a list of names). Map over this array to display each name in an unordered list (<ul>). Add an input and a button to let the user add a new name to the list state.

    return <>
    <div>
        <h1>{number} <br/>{number > 0 ? "It's positive" : "Count is low"}</h1>
        <button onClick={() => changeNumber((number) => number + 1)}>Increase</button>
        <button id='decrementBtn' onClick={handleDecrement} >Decrease</button>
        <hr />
        <h2>Name List</h2>
        <ul>
            {names.map((names, index) => (<span key={index}><li>{names}</li></span>))}
        </ul>
        <input type="text" id="nameInput" placeholder="Enter a name" />
        <button onClick={handleAddName}>Add Name</button>
    </div>
    </>
}
export default UseState