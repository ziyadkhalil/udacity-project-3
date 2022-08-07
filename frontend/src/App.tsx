import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [backendResponse, setBackendResponse] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => setBackendResponse(res.data));
  }, []);
  return (
    <div>
      <b>new</b>
      <h3>Backend response:</h3>
      {backendResponse}
    </div>
  );
}

export default App;
