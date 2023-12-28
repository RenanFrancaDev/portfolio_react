import axios from "axios";

const url = `https://fire-development-portfolio.vercel.app/`;

export class ProjectsService {
  static getProjects() {
    return axios(url);
  }
}
