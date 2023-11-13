/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Select } from "antd";
import useClimate from "../../hooks/useClimate";

const FormClimate = () => {
  const { onFinish, onFinishFailed }: any = useClimate();
  type FieldType = {
    city?: string;
    country?: string;
  };

  const COUNTRIES = [
    { value: "US", label: "Estados Unidos" },
    { value: "MX", label: "Mexico" },
    { value: "AR", label: "Argentina" },
    { value: "CO", label: "Colombia" },
    { value: "CR", label: "Costa rica" },
    { value: "ES", label: "España" },
    { value: "PE", label: "Peru" },
  ];
  return (
    <div className="contenedor">
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <div className="">
          <label htmlFor="city">Ciudad</label>
          <Form.Item<FieldType>
            name="city"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="">
          <label htmlFor="country">País</label>
          <Form.Item<FieldType>
            name="country"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Select
              style={{ width: "100%" }}
              defaultValue="--- Seleccione un pais ---"
              options={COUNTRIES}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Consultar clima
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormClimate;
