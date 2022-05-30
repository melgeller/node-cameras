const Company = require("../models/company.models");

const getAllCompanys = async (req, res, next) => {
  try {
    const allCompanys = await Company.find().populate("cameras");
    return res.json({
      status: 200,
      message: "Companys OK",
      company: allCompanys,
    });
  } catch (error) {
    return next(error);
  }
};

const getCompanyByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const companyByID = await Company.findById(id);
    return res.json({
      status: 200,
      message: "Company OK",
      company: companyByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createCompany = async (req, res, next) => {
  try {
    const newCompany = new Company(req.body);
    const createdCompany = await newCompany.save();
    return res.json({
      status: 201,
      message: "Company created",
      company: createdCompany,
    });
  } catch (error) {
    return next(error);
  }
};

const patchCompany = async (req, res) => {
    try {
      const { id } = req.params;
      const patchCompany = new Company(req.body);
      patchCompany._id = id;
      const CompanyDB = await Company.findById(id)
      patchCompany.cameras = [...CompanyDB.cameras, ...patchCompany.cameras]
      const CompanyData = await Company.findByIdAndUpdate(id, patchCompany)
      return res.status(200).json(CompanyData)
  
    } catch (error) {
      return res.status(500).json(error)
    }
  
  }

module.exports = { getAllCompanys, getCompanyByID, createCompany, patchCompany };