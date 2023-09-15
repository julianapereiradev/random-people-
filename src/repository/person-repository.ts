import { connection } from "../database/database";
import { Person } from "../protocols/person-protocol";

async function getPerson() {
  const resultGetPerson = await connection.query<Person>(`SELECT * FROM people`);
  return resultGetPerson.rows;
}


export const personRepository = {
  getPerson
};


