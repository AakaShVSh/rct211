import { useState } from "react";
import "./App.css";
import Pin from "./components/Pin";

function App() {
  const [otp, setotp] = useState("");
  return (
    <div className="App">
      <Pin
        length={4}
        handleotp={(value) => {
          setotp(value);
        }}
      />
      <h2>OTP is {otp}</h2>
    </div>
  );
}

export default App;
