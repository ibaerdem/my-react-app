import { useState } from "react"

export default function Deneme() {
    const [count, setCount] = useState(0);
    return (
        <div className="deneme">
            <p>You clicked {count} times</p>
            <button className="button1" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}