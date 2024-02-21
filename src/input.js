import { useState } from "react";

function Input() {
    const [userInput, setUserInput] = useState('');
    function handleUserInput(e) {
      setUserInput(e.target.value);
    }
    return (
      <>
        <div>
          <h2>Let's stay in touch.</h2>
          <p>
            Sign up for our newsletter to stay up-to-date on the latest products,
            receive exclusive discounts, and connect with other programmers who
            share your passion for all things tech.
          </p>
          <form>
            <label for="email">Email: </label>
            <input id="email" type="text" onChange={handleUserInput} value={userInput} />
          </form>
        </div>
        <div>
          <h2>Current User Input: </h2>
          <h4>{userInput}</h4>
        </div>
      </>
    );
  }
  
  export default Input;