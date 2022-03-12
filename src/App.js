import { useState, useEffect } from "react";
import Content from "./components/Content";
import Form from "./components/Form";
import { ProgressSpinner } from "primereact/progressspinner";
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loadingResponse, setLoadingResponse] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("apiData");
    const parsedData = JSON.parse(data);
    if (data) {
      setApiData([...parsedData]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("apiData", JSON.stringify(apiData));
  });

  return (
    <div className="container">
      <div className="flex flex-column justify-content-center align-items-center">
        <div className="form-div">
          <Form
            setApiData={setApiData}
            setLoadingResponse={setLoadingResponse}
          ></Form>
        </div>
        {loadingResponse && (
          <>
            <p className="font-bold text-pink-700">
              Your data will be loaded in 10 seconds or less
            </p>
            <ProgressSpinner />
          </>
        )}
        {apiData.map((data) => {
          return <Content key={Math.random() * 10} allData={data} />;
        })}
      </div>
    </div>
  );
}

export default App;
