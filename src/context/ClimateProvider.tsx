/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext } from "react";
import axios from "axios";
import { message } from "antd";

const ClimateContext = createContext({});

interface Props {
  children: React.ReactElement;
}
interface Props {
  city?: string;
  country?: string;
}
const ClimateProvider = ({ children }: Props) => {
  const [climate, setClimate] = useState<Props>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    getClima(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const getClima = async (values: Props) => {
    try {
      setLoading(true);
      const { country, city } = values;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      const { lat, lon } = data[0];

      const urlClimate = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: dataCliomate } = await axios(urlClimate);
      setClimate(dataCliomate);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setClimate(undefined);
      messageApi.open({
        type: "error",
        content: "No existe esta ciudad en este pais",
      });
    }
  };
  return (
    <ClimateContext.Provider
      value={{ onFinish, onFinishFailed, climate, loading }}
    >
      {contextHolder}
      {children}
    </ClimateContext.Provider>
  );
};
export { ClimateProvider };
export default ClimateContext;
