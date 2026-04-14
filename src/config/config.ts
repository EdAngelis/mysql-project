import "dotenv/config";
const env: "production" | "development" =
  (process.env.NODE_ENV as "production" | "development") || "development";

export type Properties = {
  port: string | undefined;
  api_key: string | undefined;
};

type Config = {
  production: Properties;
  development: Properties;
};

const config: Config = {
  production: {
    api_key: process.env.API_KEY || "",
    port: process.env.PORT || "",
  },
  development: {
    api_key: process.env.API_KEY || "f00f3020932fddf",
    port: process.env.PORT || "3001",
  },
};

const secret = process.env.API_KEY || "default-secret-key";

export default config["development"] as Properties;
export { secret };
