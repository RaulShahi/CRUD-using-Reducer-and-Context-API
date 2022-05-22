import react from "react";
import Form from "./components/Form/Form";
import Count from "./components/Count/Count";
import { FormContextWrapper } from "./store/FormContext";

const App = () => {
  return (
    <div className="App">
      <FormContextWrapper>
        <Form />
      </FormContextWrapper>
      <Count />
    </div>
  );
};

export default App;
