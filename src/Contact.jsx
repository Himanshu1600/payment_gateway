import React, { useState } from "react";
import "./Contact.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value, id: new Date().getTime().toString() });
  };
  const [error, seterror] = useState({
    username: null,
    useremail: null,
    usermobileNo: null,
    usermessage: null,
  });
  const submitData = async (event) => {
    event.preventDefault();

    const { name, email, mobileNo, message, id } = user;

    if (!name.trim()) {
      error.username = "Name is required";
      seterror(() => ({
        username: error.username,
      }));
    } else if (!mobileNo) {
      error.usermobileNo = "MobileNo. is required";
      seterror(() => ({
        usermobileNo: error.usermobileNo,
      }));
    } else if (mobileNo.length !== 10) {
      error.usermobileNo = "MobileNo. must contain 10 digits";
      seterror(() => ({
        usermobileNo: error.usermobileNo,
      }));
    } else if (!email) {
      error.useremail = "Email is required";
      seterror(() => ({
        useremail: error.useremail,
      }));
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
      error.useremail = "Email address is invalid";
      seterror(() => ({
        useremail: error.useremail,
      }));
    } else if (!message) {
      error.usermessage = "Message is required";
      seterror(() => ({
        usermessage: error.usermessage,
      }));
    } else {
      const res = await fetch(
        "https://spark-project-61553-default-rtdb.firebaseio.com/contactusform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            email,
            mobileNo,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          mobileNo: "",

          message: "",
        });
        seterror((olddata) => ({
          ...(olddata = null),
        }));
        alert("Form submitted successfully");
      }
    }
  };

  return (
    <>
      <div className="Contactus-body">
        <div className="container">
          <h1>Contact Us</h1>
          <form method="POST">
            <div className="inputcontainer">
              <label for="name" className="inputfield">
                Name:-
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                required
                autoComplete="off"
              />
              {error.username ? (
                <small className="errormessage">{error.username}</small>
              ) : null}
            </div>
            <div className="inputcontainer">
              <label for="mobileNo" className="inputfield">
                Mobile No.:-
              </label>
              <input
                name="mobileNo"
                id="mobileNo"
                type="number"
                placeholder="Enter your mobile no."
                value={user.mobileNo}
                onChange={getUserData}
                required
                autoComplete="off"
              />
              {error.usermobileNo ? (
                <small className="errormessage">{error.usermobileNo}</small>
              ) : null}
            </div>
            <div className="inputcontainer">
              <label for="email" className="inputfield">
                Email:-
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={getUserData}
                required
                autoComplete="off"
              />
              {error.useremail ? (
                <small className="errormessage">{error.useremail}</small>
              ) : null}
            </div>
            <div className="inputcontainer">
              <label for="message" className="inputfield">
                Message:-
              </label>
              <textarea
                name="message"
                id="message"
                type="text"
                placeholder="Enter your Message"
                value={user.message}
                onChange={getUserData}
                required
                autoComplete="off"
              />
              {error.usermessage ? (
                <small className="errormessage">**{error.usermessage}**</small>
              ) : null}
            </div>
            <button type="submit" className="btn" onClick={submitData}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
