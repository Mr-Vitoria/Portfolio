import { StatusList } from "./models/statusList/statusList.js";
import { TechList } from "./models/techList/techList.js";

import techListData from "./data/techList.json" with { type: 'json' };
import statusListData from "./data/statusList.json" with { type: 'json' };
import projectListData from "./data/projectList.json" with { type: 'json' };
import { ModalController } from "./modal.js";
import { ProjectSection } from "./models/projectList/projectSection.js";

const projectListHtml = document.getElementById("projectList")
const techListHtml = document.getElementsByClassName("techList")[0];
const statusListHtml = document.getElementsByClassName("statusList")[0];

const modalController = new ModalController(document.getElementsByClassName("modalContainer")[0]); 

const techListModel = new TechList(techListData, techListHtml);
techListModel.render();

const projectListModel = new ProjectSection(projectListHtml, projectListData, modalController);
projectListModel.render();

const statusListModel = new StatusList(statusListData, statusListHtml);
statusListModel.render();
