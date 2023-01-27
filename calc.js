function tax() {
    let grossPay = document.getElementById("taxInput").value;

    document.getElementById("row").innerHTML = "Gross Pay";

    document.getElementById("result").innerHTML = "$" + grossPay;
    totalGrossPay = Number(grossPay);

    let taxRate;
    let taxRateCalc;

    if (grossPay < 9875 || grossPay == 9875) {
        taxRate = 0.10;
    } else if (grossPay > 9876 || grossPay < 40125) {
        taxRate = 0.12;
    } else if (grossPay > 40126 || grossPay < 85525) {
        taxRate = 0.22;
    } else if (grossPay > 85526 || grossPay < 163300) {
        taxRate = 0.24;
    } else if (grossPay > 163301 || grossPay < 207350) {
        taxRate = 0.32;
    } else if (grossPay > 207351 || grossPay < 518400) {
        taxRate = 0.35;
    } else if (grossPay > 518400) {
        taxRate = 0.37;
    }

    taxRateCalc = (grossPay * taxRate).toFixed(2);

    document.getElementById("row1").innerHTML = "Federal Taxes";

    document.getElementById("result2").innerHTML = "$" + taxRateCalc;
    let fedTaxRate = Number(taxRateCalc);

    let wiTaxRate;
    let wiTaxRateCalc;

    if (grossPay > 0 || grossPay < 11970) {
        wiTaxRate = 0.0354;
    } else if (grossPay > 11970 || grossPay < 23930) {
        wiTaxRate = 0.0465;
    } else if (grossPay > 23930 || grossPay < 263480) {
        wiTaxRate = 0.0627;
    } else if (grossPay > 263480 || grossPay == 263480) {
        wiTaxRate = 0.0765;
    }

    wiTaxRateCalc = (grossPay * wiTaxRate).toFixed(2)

    document.getElementById("row2").innerHTML = "State Taxes";

    document.getElementById("result3").innerHTML = "$" + wiTaxRateCalc;
    let wiStateTax = Number(wiTaxRateCalc);

    let ssnTax;
    let ssnTaxCalc;
    let ssnTaxMessage;

    if (grossPay > 0 || grossPay < 137000) {
        ssnTax = 0.062;
    } else if (grossPay > 137000) {
        ssnTaxMessage = "none";
    }

    ssnTaxCalc = (grossPay * ssnTax).toFixed(2);

    document.getElementById("row3").innerHTML = "SSN Taxes";

    document.getElementById("result4").innerHTML = "$" + ssnTaxCalc;
    let socialSecNumber = Number(ssnTaxCalc);

    let medicareTax;
    let medicareTaxCalc;

    if (grossPay < 200000) {
        medicareTax = 0.0145;
    } else if (grossPay > 200000) {
        medicareTax = 0.0235;
    }

    medicareTaxCalc = (grossPay * medicareTax).toFixed(2);

    document.getElementById("row4").innerHTML = "Medicare Taxes";

    document.getElementById("result5").innerHTML = "$" + medicareTaxCalc;
    medicare = Number(medicareTaxCalc);

    let total = fedTaxRate + wiStateTax + socialSecNumber + medicare;
    let netPayCalc = (totalGrossPay - total).toFixed(2);

    document.getElementById("row5").innerHTML = "Net Pay";

    document.getElementById("result6").innerHTML = "$" + netPayCalc;
}