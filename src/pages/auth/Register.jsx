import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Register
        </Typography.Title>
        <Typography.Text>Enter your email below to login to your account</Typography.Text>
      </div>

      <Form layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true }, { type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The new password that you entered do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button block type="primary" htmlType="submit">
          Login
        </Button>
      </Form>

      <Typography.Paragraph style={{ textAlign: "center", margin: "1rem 0 0 0" }}>
        Already have an account?{" "}
        <b>
          <u>
            <Link to="/login">Sign in</Link>
          </u>
        </b>
      </Typography.Paragraph>
    </>
  );
}
