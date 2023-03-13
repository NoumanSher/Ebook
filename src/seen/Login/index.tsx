import { FunctionComponent, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import "antd/dist/antd.min.css";
import { Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "./login.css";
import { create, getAll } from "../../api/logInApi";

const Login: FunctionComponent = () => {
  const [form, setForm] = useState({});
  const queryClient = useQueryClient();

  const { isLoading, isError, error } = useQuery("LogIns", getAll, {
    select: (data) => data.sort((a: any, b: any) => b.id - a.id),
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form) {
      addTodoMutation.mutate(form);
    }
  };

  const addTodoMutation = useMutation(create, {
    onSuccess: () => {
      queryClient.invalidateQueries("LogIns");
    },
  });

  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    const err = error as Error;
    return <p>Error: {err.message}</p>;
  }

  return (
    <div className="pro-16">
      <img className="pro-16-child" alt="" src="../group-1988.svg" />
      <div className="pro-16-inner">
        <div className="your-digital-business-is-in-go-parent">
          <div className="your-digital-business">
            Your digital business is in good hands with us!
          </div>
          <div className="make-your-work">
            Make your work easier with an integrated ecosystem that lets all
            departments work properly together.
          </div>
        </div>
      </div>
      <img className="eb-2-icon" alt="" src="../eb-1@1x.png" />
      <strong className="copright-2023-eccount">
        © copright 2023. Eccount Book
      </strong>
      <a className="google">
        <img className="group-icon" alt="" src="../group.svg" />
      </a>
      <a className="linkedin">
        <img className="vector-icon" alt="" src="../vector.svg" />
      </a>
      <a className="apple">
        <img className="vector-icon1" alt="" src="../vector1.svg" />
      </a>
      <a className="facebook">
        <img className="vector-icon2" alt="" src="../vector2.svg" />
      </a>
      <img className="eb-1-icon" alt="" src="../eb-11@1x.png" />
      <strong className="eccount-book-wrapper">
        <b className="eccount-book">Eccount Book</b>
      </strong>
      <div className="headline">
        <div className="welcome-back">Welcome back!</div>
        <div className="welcome-back-please">
          Welcome back! Please, Enter your details
        </div>
      </div>
      <label className="label">Email</label>
      <Input
        className="field"
        type="text"
        style={{ width: "400px" }}
        size="middle"
        name="email"
        placeholder="Enter your email"
        bordered={false}
        onChange={handleForm}
      />
      <label className="label1">Password</label>
      <Input.Password
        className="field-antinputpassword"
        style={{ width: "400px" }}
        prefix={<LockOutlined />}
        size="middle"
        name="password"
        placeholder="Input placeholder"
        allowClear
        bordered={false}
        onChange={handleForm}
      />
      <div className="actions">
        <div className="frame-parent">
          <div className="frame-child" />
          <h3 className="remember-for-30">Remember for 30 days</h3>
        </div>
        <a className="forgot-password">Forgot password</a>
      </div>
      <button className="button">
        <b className="login" onClick={handleSubmit}>
          Login
        </b>
      </button>
    </div>
  );
};

export default Login;
