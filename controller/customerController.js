

const { Customer } = require("../connection/connection");
const { db } = require("../connection/connection");

exports.getCustomers = function (req, res) {
  Customer.findAll()
    .then(cus => res.json(cus))
    .catch((err) => {
      db.close();
      console.log(err);
      res.json("error : " + err)
    });
};


exports.getCustomerById = function (req, res) {
  Customer.findByPk(req.params.id)
    .then(cus => res.json(cus))
    .catch((err) => {
      console.log(err);
      res.json("error : " + err)
    });
};

exports.postCustomer = function (req, res) {
  Customer.create({
    name: req.body.name,
    address: req.body.address,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(rst => res.json(rst))
    .catch((err) => {
      //db.close();
      console.log(err);
      res.json("error : " + err)
    });
};

exports.putCustomer = function (req, res) {
  Customer.update(
    {
      name: req.body.name,
      address: req.body.address,
      updatedAt: new Date()
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(rst => res.json(rst))
    .catch((err) => {
      console.log(err);
      res.json("error : " + err)
    });
};

exports.deleteCustomer = function (req, res) {
  Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(rst => res.json(rst))
    .catch((err) => {
      console.log(err);
      res.json("error : " + err)
    });
};

exports.sendSMS = function (req, res) {

  const fs = require('fs-extra');
  const xml2js = require('xml2js');
  const parser = new xml2js.Parser();

  let xml_string = fs.readFileSync(__dirname + "/test.xml", "utf8");
  console.log(xml_string)
  console.log(process.cwd())
  var axios = require("axios");
  // axios({
  //   url: 'http://lankagate.gov.lk:9080/services/GovSMSMTHandlerProxy.GovSMSMTHandlerProxyHttpSoap11Endpoint',
  //   method: 'POST',
  //   headers: { 'Content-Type': 'text/xml' },
  //   data: xml_string
  // })
  //   .then(function (response) {
  //     console.log(response.status)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
};
