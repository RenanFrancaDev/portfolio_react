import axios from "axios";

const url = import.meta.env.VITE_URI;
// console.log(JSON.stringify(import.meta.env.VITE_URI));

export class ProjectsService {
  static getProjects() {
    return axios(url);
  }
}
