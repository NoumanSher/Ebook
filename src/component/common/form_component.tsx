import { Form } from "antd";



export const form_component = ({ onFinish ,children}: any) => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      className="w-44 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[30rem] 2xl:pt-5 xl:pt-4 lg:pt-3 md:pt-2 sm:pt-2"
      autoComplete="off"
    >
        {children}
    </Form>
  );
};
