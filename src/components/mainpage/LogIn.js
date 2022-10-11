//import axios from "axios";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

const LogIn = () => {
  const initialState = { username: "", password: "", terms: false };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const inputChange = (e) => {
    if (e.target.type === "checkbox") {
      //debugger
      setFormData({
        ...formData,
        [e.target.name] : e.target.checked ? true : false,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

//console.log(formData.terms)

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // const data = { username: formData.username, password: formData.password };
      // axios
      //   .post("", JSON.stringify(data))
      //   .then((res) => {
      //     console.log(res.data);
      setFormData(initialState);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    //username validation
    if (formData.username === "") {
      isValid = false;
      errors.username = "username is required.";
    } else {
      if (formData.username.length <= 3 || formData.username.length >= 20) {
        isValid = false;
        errors.username = "username should be 3 to 20 chars only";
      }
    }

    //password validation
    if (formData.password === "") {
      isValid = false;
      errors.password = "password is required.";
    }

   // checkbox validation
    if (formData.terms === false) {
      isValid = false;
      alert("Please Accept Remember me ")
    }

    setErrors(errors);
    return isValid;
  };

  const checkValue = (e) => {
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const displayErr = (e) => {
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.name]: e.target.name + " is required.",
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center h-screen w-full">
        <form
          onSubmit={submitHandler}
          className="max-w-[400px] w-full mx-auto bg-gray-600 p-8 px-8 rounded-lg "
        >
          <h2 className="text-3xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col py-2">
            <label className="text-gray-400">UserName</label>
            <input
              onFocus={checkValue}
              onBlur={displayErr}
              className="rounded-lg  focus:border-blue-500  mt-1  p-1"
              type="text"
              name="username"
              value={formData.username}
              onChange={inputChange}
            />
            {errors.username ? <p> {errors.username} </p> : null}
          </div>
          <div className="flex flex-col  py-2">
            <label className="text-gray-400">Password</label>
            <input
              onFocus={checkValue}
              onBlur={displayErr}
              className="rounded-lg   focus:border-blue-500  mt-1 p-1"
              type="password"
              name="password"
              value={formData.password}
              onChange={inputChange}
            />
            {errors.password ? <p> {errors.password} </p> : null}
          </div>
          <div className="flex justify-between py-2 text-gray-400">
            <p className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={inputChange}
              />
              Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="bg-teal-500 w-full py-2 my-5 shadow-lg shadow-teal-500/40 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
