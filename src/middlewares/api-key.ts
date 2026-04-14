import config from "../config/config";
import { response } from "../controller/response";
import { type Request, type Response, type NextFunction } from "express";

// Read API key from config at module load time.
// NOTE: avoid accidentally using logical operators that produce `undefined`.
const API_KEY = config?.api_key;

//const ALLOWED_ROUTES = ["/auth/signin", "/public-route-2"];

const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
  console.log("Checking API key middleware", config?.api_key, API_KEY);
  // const fullUrl = req.originalUrl;
  // if (!ALLOWED_ROUTES.includes(fullUrl)) {
  //   response(res, {
  //     message: "Forbidden: Route not allowed",
  //     data: null,
  //     status: 403,
  //   });
  //   return;
  // }

  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === API_KEY) {
    next();
  } else {
    console.error("Invalid or missing API key");
    response(res, {
      message: "Forbidden: Invalid API key",
      data: null,
      status: 403,
    });
    return;
  }
};

export default checkApiKey;
