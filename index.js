import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { runInNewContext } from "vm";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
/*function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}*/

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

const middleware = (req, res, next) => {
  res.send("not happening");
};

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(betweenHome);
app.use(helmet());
app.use(morgan("dev"));

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
