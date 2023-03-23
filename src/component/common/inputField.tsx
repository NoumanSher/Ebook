import { Form,Input } from "antd";
type inputType = {
  lable: string;
  name: string;
  placeholder: string;
};
export const InputField = ({ lable, name, placeholder }: inputType) => {
  return (
    <div>
      <Form.Item
        label={lable}
        name={name}
        rules={[{ required: true, message: `Please input your ${lable}!` }]}
      >
        <Input placeholder={placeholder} />
      </Form.Item>
    </div>
  );
};
export const InputPassword = ({ lable, name, placeholder }: inputType) => {
  return (
    <div>
      <Form.Item
        label={lable}
        name={name}
        rules={[{ required: true, message: `Please input your ${lable}!` }]}
      >
        <Input.Password placeholder={placeholder} />
      </Form.Item>
    </div>
  );
};

