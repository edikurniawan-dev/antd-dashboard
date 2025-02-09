import { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const onFinish = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Login
        </Typography.Title>
        <Typography.Text>Enter your details below to create a new account</Typography.Text>
      </div>

      <Form
        layout="vertical"
        initialValues={{
          email: "user@acme.inc",
          password: "secret",
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Email" name="email" rules={[{ required: true }, { type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Button block type="primary" htmlType="submit" loading={isProcessing}>
          Login
        </Button>
      </Form>

      <Typography.Paragraph style={{ textAlign: "center", margin: "1rem 0 0 0" }}>
        Don&apos;t have an account?{" "}
        <b>
          <u>
            <Link to="/register">Sign up</Link>
          </u>
        </b>
      </Typography.Paragraph>
    </>
  );
}
