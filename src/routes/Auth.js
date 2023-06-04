import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
  };
  const onSubmitSignup = (event) => {
    navigate("/signup");
    console.log(event);
  };
  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <input
          type="email"
          placeholder="email@example.com"
          ref={emailInputRef}
        ></input>
        <input
          type="password"
          placeholder="password"
          ref={passwordInputRef}
        ></input>
        <input type="submit" value={"로그인"}></input>
      </form>
      <button onClick={onSubmitSignup}> 회원가입</button>
      <div>
        <button>구글 로그인</button>
      </div>
    </div>
  );
}
