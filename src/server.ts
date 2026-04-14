import app from "./app";
import config from "./config/config";

const PORT = config.port;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} \nAccess the API documentation at http://localhost:${PORT}/api-docs`,
  );
});
