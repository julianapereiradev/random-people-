import {personRepository} from "../repository/person-repository";
import { Person } from "../protocols/person-protocol";

async function getPerson(): Promise<Person[]> {
  return await personRepository.getPerson();
}


const personService = {
  getPerson,
};


export default personService;