const express = require("express");
const {
  getAllSprint,
  addSprint,
  updateSprint,
  deleteSprint,
} = require("../controller/sprint");

const sprintRouter = express.Router();

sprintRouter.get("/", getAllSprint);
sprintRouter.post("/", addSprint);
sprintRouter.patch("/:id", updateSprint);
sprintRouter.get("/:id", deleteSprint);

module.exports = sprintRouter;
