const Camera = require("../models/cameras.models");

const getAllCameras = async (req, res, next) => {
  try {
    const allCameras = await Camera.find();
    return res.json({
      status: 200,
      message: "Cameras OK",
      camera: allCameras,
    });
  } catch (error) {
    return next(error);
  }
};

const getCameraByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cameraByID = await Camera.findById(id);
    return res.json({
      status: 200,
      message: "Camera OK",
      camera: cameraByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createCamera = async (req, res, next) => {
  try {
    const newCamera = new Camera(req.body);
    const createdCamera = await newCamera.save();
    return res.json({
      status: 201,
      message: "Camera created",
      camera: createdCamera,
    });
  } catch (error) {
    return next(error);
  }
};

const patchCamera = async (req, res) => {
    try {
      const { id } = req.params;
      const patchCamera = new Camera(req.body);
      patchCamera._id = id;
      const CameraDB = await Camera.findByIdAndUpdate(id, patchCamera)
      return res.status(200).json(CameraDB)
  
    } catch (error) {
      return res.status(500).json(error)
    }
  
  
  }

module.exports = { getAllCameras, getCameraByID, createCamera, patchCamera };