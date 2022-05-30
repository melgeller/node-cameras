const express = require("express");

const router = express.Router();

const {
  getAllCameras,
  getCameraByID,
  createCamera,
  patchCamera,
} = require("../controllers/cameras.controller");

router.get("/", getAllCameras);
router.get("/:id", getCameraByID);
router.post("/", createCamera);
router.patch("/:id", patchCamera)

module.exports = router;
