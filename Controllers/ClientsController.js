var access_token = "1a2face158275ab8ba48eaf6df430d8ea0a0606f";
var link = `https://api.moloni.pt/v1/customers/getAll/?access_token=${access_token}`;
const request = require('request');
 
function getAll(req, res) {
    request.post({
        url: link,
        form: {
            company_id: '205211',
        }
    }, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        else {
            data = JSON.parse(body);
            res.json(data);
        }
    });
}

function insertCli(req, res) {
    link = `https://api.moloni.pt/v1/customers/insert/?access_token=1a2face158275ab8ba48eaf6df430d8ea0a0606f`
    request.post({
        url: link,
        form: {
            company_id: '205211',
            vat: req.sanitize('vat').escape(), //string 
            number: req.sanitize('number').escape(), //customer number ex: 12345
            name: req.sanitize('name').escape(), //string
            language_id: req.sanitize('language_id').escape(), //int, 1 para tuga
            address: req.sanitize('address').escape(), //string 
            zip_code: req.sanitize('zip_code').escape(), //string ####-###
            city: req.sanitize('city').escape(), //string 
            country_id: req.sanitize('country_id').escape(), //int, 1 para tuga
            email: req.sanitize('email').escape(), //string OPTIONAL
            website: req.sanitize('website').escape(), //string OPTIONAL
            phone: req.sanitize('phone').escape(), //string OPTIONAL
            fax: req.sanitize('fax').escape(), //string OPTIONAL
            contact_name: req.sanitize('contact_name').escape(), //string OPTIONAL
            contact_email: req.sanitize('contact_email').escape(), //string OPTIONAL
            contact_phone: req.sanitize('contact_phone').escape(), //string OPTIONAL
            notes: req.sanitize('notes').escape(), //string OPTIONAL
            salesman_id: req.sanitize('salesman_id').escape(), //int OPTIONAL
            price_class_id: req.sanitize('price_class_id').escape(), //int OPTIONAL
            maturity_date_id: req.sanitize('maturity_date_id').escape(), //int 1297341 
            payment_day: req.sanitize('payment_day').escape(), //int OPTIONAL
            discount: req.sanitize('discount').escape(), //float OPTIONAL
            credit_limit: req.sanitize('credit_limit').escape(), //float OPTIONAL
            
            copies:{
                document_set_id: req.sanitize('document_set_id').escape(), //0
                copies: req.sanitize('copies').escape(), //0
            },
            
            payment_method_id: req.sanitize('payment_method_id').escape(), //int 1454269 ou 0
            delivery_method_id: req.sanitize('delivery_method_id').escape(), //int 1488477 OPTIONAL
            field_notes: req.sanitize('delivery_method_id').escape(), //string OPTIONAL
        }
    }, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        else {
            data = JSON.parse(body);
            res.json(data);
        }
    });
}


module.exports = {
    listClients: getAll,
    addClient: insertCli
};