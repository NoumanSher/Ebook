import { Form, Input, Modal } from "antd";
// import { useState } from "react";
import background from "../../image/bg3.jpg";
import {  useMutation } from "react-query";

import { create } from "../../api/logInApi";

const Login = () => {
//   const [form, setForm] = useState({});

const SignInMutation = useMutation(create, {
    onSuccess: (data:any) => {
    //   queryClient.invalidateQueries("LogIns");
    Modal.success({content:`${data.statusText} successfully`})
    },
    onError(error, variables, context) {
        console.log(error, variables, context)
    },
  });
 
  const onFinish = (values: any) => {
    debugger;
    if (values) {
      SignInMutation.mutate(values);

    }
  };
  return (
    <div
      className="h-screen flex items-center justify-center  bg-cover bg-center bg-no-repeat bg-none"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-1 ">
        <div className="text-center relative">
          <img
            src="../eb-logo.png"
            alt="broke"
            className="absolute left-[18px] top-[-35px] bottom-[200px] w-10 sm:w-14 sm:left-[64px] sm:top-[-53px] md:w-16 md:left-[81px] md:top-[-58px]  lg:left-[145px] xl:left-[211px] 2xl:w-24  2xl:left-[220px] 2xl:top-[-90px] xl:top-[-61px]"
          />

          <b className=" text-sm bg-gradient-to-r from-blue-700 via-black to-blue-900 text-transparent bg-clip-text md:text-base 2xl:text-2xl">
            Eccount Book
          </b>
          <h2 className="tracking-[-0.02em] font-bold md:text-lg 2xl:text-3xl">
            Welcome back!
          </h2>
          <p className="text-xs md:text-sm 2xl:text-xl text-gray-600">
            Welcome back! Please, Enter your details
          </p>
          <div className="flex justify-center">
            {" "}
            <Form
              name="basic"
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={onFinish}
              //   onFinishFailed={onFinishFailed}
              className="w-44 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[30rem] 2xl:pt-5 xl:pt-4 lg:pt-3 md:pt-2 sm:pt-2"
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Enter password" />
              </Form.Item>

              <button
                type="submit"
                className="w-[5rem] 2xl:w-[29rem] xl:w-[23rem] lg:w-[19rem] md:w-[17rem] sm:w-[13rem] hover:bg-[#8950d3] bg-[#7c3cce] text-white h-10 rounded-lg outline-none"
              >
                Login
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div className=" flex-1 text-white text-center">
        <h1 className="text-xs p-5 lg:px-14 sm:px-4   sm:text-sm lg:text-xl xl:text-2xl xl:px-20 2xl:text-3xl tracking-[-0.01em] leading-[120%] font-extrabold   subpixel-antialiased ">
          Your digital business is in good hands with us!
        </h1>
        <p className=" text-[10px] px-4 sm:px-6 sm:text-xs md:px-7 md:text-sm lg:text-sm xl:text-sm lg:px-8 xl:px-14 2xl:text-base  tracking-[0.01em] leading-[155%] font-medium inline-block text-slate-200    subpixel-antialiased      ">
          Make your work easier with an integrated ecosystem that lets all
          departments work properly together.
        </p>
      </div>
    </div>
  );
};

export default Login;
