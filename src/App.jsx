import React from "react";
import TextEditor from "./components/TextEditor";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-6xl font-light text-white bg-orange-950 p-5">
          Text Editor App
        </h1>

        <div>
          <TextEditor />
        </div>
      </div>
    </>
  );
};

export default App;
