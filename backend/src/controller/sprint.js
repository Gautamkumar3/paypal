const SprintModal = require("../modal/sprint");

const addSprint = async (req, res) => {
  const { name } = req.body;

  try {
    const checkSprint = await SprintModal.findOne({ name });
    if (checkSprint) {
      res.status(400).send({
        status: "warning",
        message: "This sprint is already exist create another one",
      });
    } else {
      const Sprint = new SprintModal({ ...req.body });
      await Sprint.save();
      res.status(200).send({
        status: "success",
        message: "Sprint created successfully",
        data: Sprint,
      });
    }
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

const getAllSprint = async (req, res) => {
  try {
    const Sprint = await SprintModal.find();
    res.status(200).send({
      status: "success",
      message: "Get all sprint data successfully",
      data: Sprint,
    });
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

const updateSprint = async (req, res) => {
  const { id } = req.params;
  try {
    const Sprint = await SprintModal.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(200).send({
      status: "success",
      message: "Sprint updated successfully",
      data: Sprint,
    });
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

const deleteSprint = async (req, res) => {
  const { id } = req.params;
  try {
    const Sprint = await SprintModal.findByIdAndDelete(id);
    res.status(200).send({
      status: "success",
      message: "Sprint deleted successfully",
      data: Sprint,
    });
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

module.exports = {
  addSprint,
  getAllSprint,
  deleteSprint,
  updateSprint,
};