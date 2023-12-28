import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { toast } from "react-toastify";

let url = import.meta.env.VITE_URL;

const GlobalState = (props) => {

  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState({name: "", email: "", mobile: ""});

  const toastMessage = (message, type) => {
    if(type === "success") toast.success(message);
    else if(type === "error") toast.error(message);
    else if(type === "warning") toast.warning(message);
    else toast.info(message);
  }

  const login = async (login, password) =>{
    setProgress(20);
    try {
      const response = await fetch(`${url}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      setProgress(40);
      const data = await response.json();
      setProgress(60);
      if (data.success) {
        setUser({name: data.data.name, email: data.data.email, mobile: data.data.mobile});
        localStorage.setItem("token", data.token);
        toastMessage(data.info, "success");
        setProgress(100);
      return true;
      } else {
        toastMessage(data.error, "warning");
        setProgress(100);
      return false;
      }
      
    } catch (error) {
      setProgress(100);
      console.log(error);
      return false;
    }
  }

  const signup = async (name, email, mobile, password) =>{
    setProgress(20);
    try {
      const response = await fetch(`${url}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, mobile }),
      });
      setProgress(40);
      const data = await response.json();
      setProgress(60);
      if (data.success) {
        toastMessage(data.info, "success");
        setProgress(100);
        return true;
      } else {
        toastMessage(data.error, "warning");
        setProgress(100);
        return false;
      }
    } catch (error) {
      console.log(error);
      setProgress(100);
      return false;
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({name: "", email: "", mobile: ""});
  }

  return (
    <GlobalContext.Provider
      value={{ login, signup, progress, user, handleLogout }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;