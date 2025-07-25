function generateReport() {
  var sheds = [];
  //get ht input values
  sheds[0] = parseInt(document.getElementById("a").value);
  sheds[1] = parseInt(document.getElementById("b").value);
  sheds[2] = parseInt(document.getElementById("c").value);
  sheds[3] = parseInt(document.getElementById("d").value);

  //calculate income values

  var dayTotal = sheds[0] + sheds[1] + sheds[2] + sheds[3];

  var price = parseInt(document.getElementById("price").value);

  var dailyIncome = price * dayTotal;
  var weeklyIncome = dailyIncome * 7;
  var januaryIncome = dailyIncome * 31;
  var februaryIncome = dailyIncome * 28;
  var febLeapIncome = dailyIncome * 29;
  var marchIncome = dailyIncome * 31;
  var aprilIncome = dailyIncome * 30;
  var mayIncome = dailyIncome * 31;
  var juneIncome = dailyIncome * 30;
  var julyIncome = dailyIncome * 31;
  var augustIncome = dailyIncome * 31;
  var septemberIncome = dailyIncome * 30;
  var octoberIncome = dailyIncome * 31;
  var novemberIncome = dailyIncome * 30;
  var decemberIncome = dailyIncome * 31;

  var leapYearIncome =
    januaryIncome +
    febLeapIncome +
    marchIncome +
    aprilIncome +
    mayIncome +
    juneIncome +
    julyIncome +
    augustIncome +
    septemberIncome +
    octoberIncome +
    novemberIncome +
    decemberIncome;
  var nonLeapYearIncome =
    januaryIncome +
    februaryIncome +
    marchIncome +
    aprilIncome +
    mayIncome +
    juneIncome +
    julyIncome +
    augustIncome +
    septemberIncome +
    octoberIncome +
    novemberIncome +
    decemberIncome;
  console.log(sheds);
  //hide placeholder text on report

  document.getElementById("placeholder").classList.add("hidden");

  //show report values
  
  document.getElementById("report-a").innerText = sheds[0]
  document.getElementById("report-b").innerText = sheds[1]
  document.getElementById("report-c").innerText = sheds[2]
  document.getElementById("report-d").innerText = sheds[3]
  document.getElementById("daily").innerText = dailyIncome
  document.getElementById("weekly").innerText = weeklyIncome

  document.getElementById("january").innerText = januaryIncome
  document.getElementById("february").innerText = februaryIncome
  document.getElementById("feb-leap").innerText = febLeapIncome
  document.getElementById("march").innerText = marchIncome
  document.getElementById("april").innerText = aprilIncome
  document.getElementById("may").innerText = mayIncome
  document.getElementById("june").innerText = juneIncome
  document.getElementById("july").innerText = julyIncome
  document.getElementById("august").innerText = augustIncome
  document.getElementById("september").innerText = septemberIncome
  document.getElementById("october").innerText = octoberIncome
  document.getElementById("november").innerText = novemberIncome
  document.getElementById("december").innerText = decemberIncome
  document.getElementById("leap-year").innerText = leapYearIncome
  document.getElementById("non-leap-year").innerText = nonLeapYearIncome

  //show report text
  document.getElementById("report-values").classList.remove("hidden");
}
