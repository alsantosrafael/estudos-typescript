/**
 * Para criar: name, email, password
 */

interface TechObject {
  title: string;
  experience: number;
}
interface CreateUserData {
  name?: string; //o ? significa que esse parâmetro é opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>; //Definindo arrays que recebem
  //elementos do tipo string ou
  //um objeto do tipo TechObject
  //se o array tiver apenas elementos de um tipo techs: string[]
}
export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
