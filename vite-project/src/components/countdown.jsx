// Understand the concept of "side effects" (data fetching, DOM manipulation). Learn the three main dependency array configurations: no array (runs on every render), empty array [] (runs once on mount), and with dependencies [state, props] (runs on mount and when dependencies change).
// Hands-On: Create a component that displays a countdown timer. Use useEffect with an empty dependency array to set up an interval (setInterval) that runs every second and updates a useState variable. Crucially: Return a cleanup function to clear the interval when the component unmounts.

import { useState, useEffect } from 'react';

function Countdown() {
    let [count, setCount] = useState(10);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((count) => count - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Countdown: {count}</h1>
            <h2>{ count == 0? "Time's up!" : ""}</h2>
        </div>
    )
}
export default Countdown;