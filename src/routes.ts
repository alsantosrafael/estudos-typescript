import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Rafael Almeida",
    email: "rafael.profeng@gmail.com",
    password: "123456",
    techs: [
      "NodeJS",
      "ReactJS",
      "React Native",
      {
        title: "JavaScript",
        experience: 100,
      },
    ],
  });
  return response.json({ message: "Hello, World!" });
}
