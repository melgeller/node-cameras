const express = require("express");

const router = express.Router();

const {
  getAllCompanys,
  getCompanyByID,
  createCompany,
  patchCompany,
} = require("../controllers/companys.controllers");

router.get("/", getAllCompanys);
router.get("/:id", getCompanyByID);
router.post("/", createCompany);
router.patch("/:id", patchCompany)

module.exports = router;