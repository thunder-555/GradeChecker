function calcP(inputIdGen, inputIdMain, outputId) {
    let genMarks = parseFloat(document.getElementById(inputIdGen).value);
    let percentageGen = (genMarks / 20) * 100;
    let mainMarks = parseFloat(document.getElementById(inputIdMain).value);
    let percentageMain = (mainMarks / 30) * 100;
    return document.getElementById(outputId).innerHTML = "Main Percentage: " + percentageMain.toFixed(2) + "%<br>" + "General Percentage: " + percentageGen.toFixed(2) + "%<br>";
}

function sciCalc(inputPhy, inputChem, inputBio, inputGen, outputIdMain) {
    let phy = parseFloat(document.getElementById(inputPhy).value);
    let chem = parseFloat(document.getElementById(inputChem).value);
    let bio = parseFloat(document.getElementById(inputBio).value);
    let gen = parseFloat(document.getElementById(inputGen).value);

    let totalMainMarks = phy + chem + bio;
    let percentageMain = (totalMainMarks / 30) * 100;
    let percentageGen = (gen / 20) * 100;

    return document.getElementById(outputIdMain).innerHTML =
        "Physics Percentage: " + ((phy / 10) * 100) + "%<br><br>" +
        "Chemistry Percentage: " + ((chem / 10) * 100) + "%<br><br>" +
        "Biology Percentage: " + ((bio / 10) * 100) + "%<br><br>" +
        "General Percentage: " + (percentageGen) + "%<br><br>";
}

function percent(number, outOf) {
    return (number / outOf) * 100;
}
function sstCalc() {
    let his = parseFloat(document.getElementById('hisMain').value);
    let dem = parseFloat(document.getElementById('demMain').value);
    let geo = parseFloat(document.getElementById('geoMain').value);
    let eco = parseFloat(document.getElementById('ecoMain').value);
    let gen = parseFloat(document.getElementById('sstGen').value);
    
    let totalMainMarks = his + dem + geo + eco;
    let hisPercent = percent(his, 8);
    let demPercent = percent(dem, 7);
    let geoPercent = percent(geo, 8);
    let ecoPercent = percent(eco, 7);
    let totalMainPercent = percent(totalMainMarks, 30);
    let totalGenPercent = percent(gen, 20);

    return document.getElementById('sstOutPut').innerHTML = "History Percentage: " + hisPercent.toFixed(2) + "%<br><br>" + "DemoPol Percentage: " + demPercent.toFixed(2) + "%<br><br>" + "Geography Percentage: " + geoPercent.toFixed(2) + "%<br><br>" + "Economics Percentage: " + ecoPercent.toFixed(2) + "%<br><br>" + "Total Main Percent: " + totalMainPercent.toFixed(2) + "%<br><br>" + "Total General Percentage: " + totalGenPercent.toFixed(2) + "%<br>";
}

/*                LOAD BUTTONS                  */

function test() {
    let x = document.getElementById("testInput").value;
    console.log(x / 2)
}

function loadEnglish() {
    calcP('engGen', 'engMain', 'engOutput')
}

function loadScience() {
    sciCalc('phyMain', 'chemMain', 'bioMain', 'sciGen', 'sciOutput');
}

function loadSst() {
    sstCalc()
}

function loadHinsans() {
    calcP("sanGen", "sanMain", "sanOutput")
}

function loadMath() {
    calcP('mathGen', 'mathMain', 'mathO')
}

function loadAi() {
    calcP('aiGen', 'aiMain', 'aiO')
}

function get(x) {
    return parseFloat(document.getElementById(x).value);
}
function t1() {
    let engGen = get('engGen');
    let sciGen = get('sciGen');
    let sanGen = get('sanGen');
    let sstGen = get('sstGen');
    let mathGen = get('mathGen');
    let aiGen = get('aiGen');

    let totalGenMarksValue = engGen + sciGen + sanGen + sstGen + mathGen + aiGen;

    document.getElementById('totalGenMarks').innerHTML = "Total General Marks: " + totalGenMarksValue;
}



function t2() {
    let engMain = get('engMain');
    let phyMain = get('phyMain');
    let chemMain = get('chemMain');
    let bioMain = get('bioMain');
    let sanMain = get('sanMain');
    let hisMain = get('hisMain');
    let demMain = get('demMain');
    let geoMain = get('geoMain');
    let ecoMain = get('ecoMain');
    let mathMain = get('mathMain');
    let aiMain = get('aiMain');

    let totalMainMarksValue = engMain + phyMain + chemMain + bioMain + sanMain + hisMain + demMain + geoMain + ecoMain + mathMain + aiMain;

    return document.getElementById('totalMainMarks').innerHTML = "Total Main Marks: " + totalMainMarksValue;
}


function t3() {
    let engGen = get('engGen');
    let sciGen = get('sciGen');
    let sanGen = get('sanGen');
    let sstGen = get('sstGen');
    let mathGen = get('mathGen');
    let aiGen = get('aiGen');

    let engMain = get('engMain');
    let phyMain = get('phyMain');
    let chemMain = get('chemMain');
    let bioMain = get('bioMain');
    let sanMain = get('sanMain');
    let hisMain = get('hisMain');
    let demMain = get('demMain');
    let geoMain = get('geoMain');
    let ecoMain = get('ecoMain');
    let mathMain = get('mathMain');
    let aiMain = get('aiMain');

    let totalCombinedMarksValue = engGen + sciGen + sanGen + sstGen + mathGen + aiGen + engMain + phyMain + chemMain + bioMain + sanMain + hisMain + demMain + geoMain + ecoMain + mathMain + aiMain;

    return document.getElementById('totalCombinedMarks').innerHTML = "Total Combined Marks: " + totalCombinedMarksValue;
}


function t4() {
    let engGen = get('engGen');
    let sciGen = get('sciGen');
    let sanGen = get('sanGen');
    let sstGen = get('sstGen');
    let mathGen = get('mathGen');
    let aiGen = get('aiGen');

    let totalGenMarksValue = engGen + sciGen + sanGen + sstGen + mathGen + aiGen;

    let totalGenPercentageValue = (totalGenMarksValue / 120) * 100;

    return document.getElementById('totalGenPercentage').innerHTML = "Total General Percentage: " + totalGenPercentageValue + "%";
}

function t5() {
    let engMain = get('engMain');
    let phyMain = get('phyMain');
    let chemMain = get('chemMain');
    let bioMain = get('bioMain');
    let sanMain = get('sanMain');
    let hisMain = get('hisMain');
    let demMain = get('demMain');
    let geoMain = get('geoMain');
    let ecoMain = get('ecoMain');
    let mathMain = get('mathMain');
    let aiMain = get('aiMain');

    let totalMainMarksValue = engMain + phyMain + chemMain + bioMain + sanMain + hisMain + demMain + geoMain + ecoMain + mathMain + aiMain;

    let totalMainPercentageValue = percent(totalMainMarksValue, 300);

    return document.getElementById('totalMainPercentage').innerHTML = "Total Main Percentage: " + totalMainPercentageValue + "%";
}


function t6() {
    let engGen = get('engGen');
    let sciGen = get('sciGen');
    let sanGen = get('sanGen');
    let sstGen = get('sstGen');
    let mathGen = get('mathGen');
    let aiGen = get('aiGen');

    let engMain = get('engMain');
    let phyMain = get('phyMain');
    let chemMain = get('chemMain');
    let bioMain = get('bioMain');
    let sanMain = get('sanMain');
    let hisMain = get('hisMain');
    let demMain = get('demMain');
    let geoMain = get('geoMain');
    let ecoMain = get('ecoMain');
    let mathMain = get('mathMain');
    let aiMain = get('aiMain');

    let totalCombinedMarksValue = engGen + sciGen + sanGen + sstGen + mathGen + aiGen + engMain + phyMain + chemMain + bioMain + sanMain + hisMain + demMain + geoMain + ecoMain + mathMain + aiMain;

    let totalCombinedPercentageValue = percent(totalCombinedMarksValue, 420);

    return document.getElementById('totalCombinedPercentage').innerHTML = "<hr>Total Percentage: <br>" + totalCombinedPercentageValue + "%";
}


function loadName() {
    nameOfUser = document.getElementById('name').value;
    document.getElementById('sayhel').innerHTML = "Hello, " + nameOfUser + "! Welcome To my Website! Go ahead calculate your marks and percentage! "
}

function tada(){
    t1()
    t2()
    t3()

    t4()
    t5()
    t6()
}