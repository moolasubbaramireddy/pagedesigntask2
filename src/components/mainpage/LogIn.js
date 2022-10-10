import React, { useState } from "react";



const LogIn = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(ValidateForm()){
      // login(JSON.stringify(data))
      //   console.log(data)
    }
    // if (data.username.length === 0 || data.password.length === 0) {
    //   setError(true);
    // }
  };

  const ValidateForm = ()=>{
    let isValid = true;
    let error ={}
    //username validation
    if(data.username === ''){
      isValid=false;
      error.username="username is requires!!"
    }

    //password validation
    if(data.password ===''){
      isValid=false;
      error.password="password is required!!"
    }
    setError(error)

    return isValid;
}

  return (
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
            className="rounded-lg  focus:border-blue-500  mt-1  p-1"
            type="text"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
          {error.username? (
            <p className="text-orange-50">{error.username}</p>
          ) : null}
        </div>
        <div className="flex flex-col  py-2">
          <label className="text-gray-400">Password</label>
          <input
            className="rounded-lg   focus:border-blue-500  mt-1 p-1"
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
          {error.password ? (
            <p className="text-orange-50">{error.password}</p>
          ) : null}
        </div>
        <div className="flex justify-between py-2 text-gray-400">
          <p className="flex items-center">
            <input className="mr-2" type="checkbox" /> Remember Me
          </p>
          <p>Forgot Password</p>
        </div>
        <button className="bg-teal-500 w-full py-2 my-5 shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
          Sign In
        </button> 
      </form>
    </div>
  );
};

export default LogIn;
