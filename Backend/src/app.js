import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import restaurantRouter from "./route/restaurant.route.js";
app.use("/api", restaurantRouter)

import partnerRouter from "./route/partner.route.js";
app.use("/api", partnerRouter)

import customerRouter from "./route/customer.route.js"
// app.use("/user", customerRouter)
app.use("/api", customerRouter)

export default app;
