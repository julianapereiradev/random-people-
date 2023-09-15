import { Request, Response } from "express";
import personService from "../service/person-service"
import httpStatus from "http-status";

export async function getPerson(req: Request, res: Response) {
  const persons = await personService.getPerson();
  const indiceAleatorio = Math.floor(Math.random() * persons.length);
  const person = persons[indiceAleatorio];
  res.status(httpStatus.OK).send(person);
}