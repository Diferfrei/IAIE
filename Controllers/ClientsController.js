var access_token = "998eb139f6778cb20c41b1c3b3e0ba2f1fef780d";

const request = require("request");
//const sanitizeHtml = require('sanitize-html');

function getAll(req, res) {
  link = `https://api.moloni.pt/v1/customers/getAll/?access_token=${access_token}`;
  request.post(
    {
      url: link,
      form: {
        company_id: "205211",
      },
    },
    function (err, httpResponse, body) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      } else {
        data = JSON.parse(body);
        res.json(data);
      } 
    }
  );
}

function getClient(req, res) {
  link = `https://api.moloni.pt/v1/customers/getAll/?access_token=${access_token}`;
  const customer_id = req.params.customer_id;
  request.post(
    {
      url: link,
      form: {
        company_id: "205211",
      },
    },
    function (err, httpResponse, body) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      } else {
        data = JSON.parse(body);

        let result;
        for(var i = 0; i < data.length; i++) {
            var data2 = data[i];
            if (data2.customer_id == customer_id){
                result = data2
            }
        }

        res.json(result);
      }
    }
  );
}

function addClient(req, res) {
  const vat = req.params.vat;
  const number = req.params.number;
  const name = req.params.name;
  const address = req.params.address;
  const zip_code = req.params.zip_code;
  const city = req.params.city;
  const email = req.params.email;
  const phone = req.params.phone;
  const notes = req.params.notes;
  link = `https://api.moloni.pt/v1/customers/insert/?access_token=${access_token}`;
  request.post(
    {
      url: link,
      form: {
        company_id: "205211",
        vat: vat, //string
        number: number, //customer number ex: 12345
        name: name, //string
        language_id: "1", //int, 1 para tuga
        address: address, //string
        zip_code: zip_code, //string ####-###
        city: city, //string
        country_id: "1", //int, 1 para tuga
        email: email, //string OPTIONAL
        website: "", //string OPTIONAL
        phone: phone, //string OPTIONAL
        fax: "", //string OPTIONAL
        contact_name: "", //string OPTIONAL
        contact_email: "", //string OPTIONAL
        contact_phone: "", //string OPTIONAL
        notes: notes, //string OPTIONAL
        salesman_id: "0", //int OPTIONAL
        price_class_id: "0", //int OPTIONAL
        maturity_date_id: "0", //int 1297341
        payment_day: "0", //int OPTIONAL
        discount: "0", //float OPTIONAL
        credit_limit: "0", //float OPTIONAL

        copies: {
          document_set_id: "0", //0
          copies: "0", //0
        },

        payment_method_id: "1454269", //int 1454269 para transf banc ou 0
        delivery_method_id: "1488477", //int 1488477 OPTIONAL
        field_notes: "", //string OPTIONAL
      },
    },
    function (err, httpResponse, body) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      } else {
        data = JSON.parse(body);
        res.json(data);
      }
    }
  );
}

function updateClient(req, res) {
  const vat = req.params.vat;
  const number = req.params.number;
  const name = req.params.name;
  const address = req.params.address;
  const zip_code = req.params.zip_code;
  const city = req.params.city;
  const email = req.params.email;
  const phone = req.params.phone;
  const notes = req.params.notes;
  link = `https://api.moloni.pt/v1/customers/update/?access_token=${access_token}`;
  request.post(
    {
      url: link,
      form: {
        company_id: "205211",
        vat: vat, //string
        number: number, //customer number ex: 12345
        name: name, //string
        language_id: "1", //int, 1 para tuga
        address: address, //string
        zip_code: zip_code, //string ####-###
        city: city, //string
        country_id: "1", //int, 1 para tuga
        email: email, //string OPTIONAL
        website: "", //string OPTIONAL
        phone: phone, //string OPTIONAL
        fax: "", //string OPTIONAL
        contact_name: "", //string OPTIONAL
        contact_email: "", //string OPTIONAL
        contact_phone: "", //string OPTIONAL
        notes: notes, //string OPTIONAL
        salesman_id: "0", //int OPTIONAL
        price_class_id: "0", //int OPTIONAL
        maturity_date_id: "0", //int 1297341
        payment_day: "0", //int OPTIONAL
        discount: "0", //float OPTIONAL
        credit_limit: "0", //float OPTIONAL

        copies: {
          document_set_id: "0", //0
          copies: "0", //0
        },

        payment_method_id: "1454269", //int 1454269 para transf banc ou 0
        delivery_method_id: "1488477", //int 1488477 OPTIONAL
        field_notes: "", //string OPTIONAL
      },
    },
    function (err, httpResponse, body) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      } else {
        data = JSON.parse(body);
        res.json(data);
      }
    }
  );
}

function deleteClient(req, res) {
  link = `https://api.moloni.pt/v1/customers/delete/?access_token=${access_token}`;
  const customer_id = req.params.customer_id;
  request.post(
    {
      url: link,
      form: {
        company_id: "205211",
        customer_id: customer_id,
      },
    },
    function (err, httpResponse, body) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      } else {
        data = JSON.parse(body);
        res.json(data);
      }
    }
  );
}

module.exports = {
  listClients: getAll,
  getClient: getClient,
  addClient: addClient,
  deleteClient: deleteClient,
  updateClient: updateClient,
};
