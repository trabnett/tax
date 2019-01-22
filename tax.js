var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var res = {};
  var flag = [];
  for (var company in salesData) {
    let sold  = totalSales(salesData[company]['sales']);
    let province = salesData[company]['province'];
    let taxrate = taxRates[province];
    let taxed = (sold * taxrate);
    let name = companySalesData[company]['name'];
    if (flag.includes(companySalesData[company]['name'])) {
      let grosssales = res[name]['totalSales'] + sold;
      let grosstax = res[name]['totalTaxes']+ taxed;
      let corp = companySalesData[company]['name'];
      res[corp] = {totalSales: grosssales, totalTaxes: grosstax};
    } else {
      flag.push(companySalesData[company]['name']);
      res[name] = {totalSales: sold, totalTaxes: taxed};
    }
  }
  return res;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

function totalSales (arr) {
  var res = 0
  for (var entry of arr) {
    res += entry
  }
  return res
}






















