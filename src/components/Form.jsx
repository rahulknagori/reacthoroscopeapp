import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";

const days = [
  { label: "yesterday", value: "yesterday" },
  { label: "today", value: "today" },
  { label: "tomorrow", value: "tomorrow" },
];

const Form = ({ setApiData, setLoadingResponse }) => {
  const [user, setUser] = useState({
    sign: "",
    name: "",
    email: "",
  });
  const [day, setDay] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      setLoadingResponse(true);
      const URL = `https://aztro.sameerkumar.website/?sign=${user.sign}&day=${day}`;
      async function postData(url = "") {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.ok
          ? response.json()
          : {
              message: await response.json(),
            };
      }

      postData(URL).then((data) => {
        if (data.message) {
          setErrorMsg(data.message.message);
          setLoadingResponse(false);
        } else {
          setApiData([{ ...data, ...user }]);
          setLoadingResponse(false);
          setUser((prev) => ({ ...prev, sign: "", name: "", email: "" }));
        }
      });
    } else {
      setErrorMsg("Please Enter a valid email address");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="mt-5">
      <div className="w-75 mb-5" style={{ height: "4px" }}>
        {errorMsg.length > 0 && (
          <p className="bg-pink-700 text-white p-1">{errorMsg}</p>
        )}
      </div>
      <div className=" flex flex-column">
        Search Your Sign
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            className="w-full"
            value={user.sign}
            onChange={(e) => {
              setErrorMsg("");
              setUser((prev) => ({
                ...prev,
                sign: e.target.value,
              }));
            }}
            required={true}
            placeholder="your sign"
          />
        </span>
        <div className="p-inputgroup mt-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            value={user.name}
            placeholder="Name"
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            required={true}
          />
        </div>
        <InputText
          className="mt-3"
          value={user.email}
          placeholder="Enter your email"
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          required={true}
        />
        <div className="mt-3">
          Select Day
          <SelectButton
            value={day}
            options={days}
            onChange={(e) => setDay(e.value)}
            required={true}
          ></SelectButton>
        </div>
        <Button className="mt-3" label="Submit" />
      </div>
    </form>
  );
};

export default Form;
