const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export default function handler(req, res) {
    const options = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: '{"to":"Donor,\nThe Post Building,\n100 Museum St,\nLondon\nWC1A 1PB","from":"C/O Bowline Capital:\n84 Brook St, Mayfair,\nLondon\nW1K 5EH","logo":"https://www.humanpractice.org/wp-content/uploads/2020/01/Logo1-300x159.png","currency":"GBP","due_date":"30/09/22","number":1,"items":[{"name":"Ndururumo High School Library","quantity":1,"unit_cost":500000,"description":"Construction and stocking of secondary school library."},{"name":"Ndururumo High School IT Hub","quantity":1,"unit_cost":125000,"description":"Construction IT hub facility and provision of 100 laptops for students."}]}'
      };
      
      fetch('https://invoice-generator.com', options)
        .then(response => response.json())
        .then(response => res.send(response))
        .catch(err => console.error(err));

    // const { name = 'World' } = req.query;
    // return res.send(`Hello ${name}!`);
    
}  