import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./middlewares";
import routes from "./routes.js";

const app = express();

app.set("view engine", "pug");
// view_engine이 기본으로는 undifined 이지만 pug를 기본 view_engine으로 추가한다.

// ----------------------------- middleware 호출 시작
app.use(helmet());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localMiddleware);
// ----------------------------- middleware 끝
// ----------------------------- route 시작
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
// ----------------------------- route 종료

export default app;
