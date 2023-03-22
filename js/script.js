// alert("Hello, World ");

var myHeading = document.querySelector("h1");
myHeading.style.color = "red";
myHeading.style.fontSize = "50px";
myHeading.style.fontWeight = "bolder";

var listA = document.querySelectorAll("#list-items a");
for (var i = 0; i< listA.length; i++){
    listA[i].style.color = "red";
}


var thead = document.querySelector(".lab_table thead th");
thead.style.color = "red";

var tbodyTD = document.querySelectorAll(".lab_table tbody tr .name");
for (var i = 0; i< tbodyTD.length; i++){
    tbodyTD[i].style.color = "green";
}


var btn = document.querySelector(".btn");
btn.style.backgroundColor = "yellow";
btn.style.border = "none";
btn.style.padding = "15px 25px";
btn.style.cursor = "pointer";


var pTag = document.querySelector("p");
pTag.classList.add("hugeText");


// Assignment -01 Solutions

var platFormUrls = document.querySelectorAll(".lab_table tbody tr td a");

for (var i=0; i< platFormUrls.length; i++){

    var href = platFormUrls[i].getAttribute('href');
    href = href.replace('http://', 'https://');
    platFormUrls[i].setAttribute('href',href);
    platFormUrls[i].innerHTML = href;
    platFormUrls[i].style.color = "red";

}


// Assigment -02 Solution

const lab_table_tr = document.querySelectorAll(".lab_table_2 tbody tr");

var countGender = 0;
var countGenderFemale = 0;

for (let i = 0; i < lab_table_tr.length; i++) {

    const genderColumn = lab_table_tr[i].querySelector("td:nth-child(3)");
    const countryColumn = lab_table_tr[i].querySelector("td:nth-child(4)");

    // check if the value of the gender column is "Male"
    if (genderColumn.innerHTML.trim() === "Male") {
        // change the color of the text to red
        genderColumn.style.color = "red";
        countGender++;
    }else{
        countGenderFemale++;
    }

   if(countryColumn.innerHTML.trim() === "China"){
        countryColumn.style.color = "green";
        countryColumn.style.fontWeight = "900";
    }
}

document.querySelector(".maleGender").innerHTML = countGender;
document.querySelector(".femaleGender").innerHTML = countGenderFemale;