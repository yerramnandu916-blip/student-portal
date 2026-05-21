// Multiple Students Data
const students = {

    "kkphp/2025-01": {

	name:"Nithya",

        attendance: {
            total: 120,
            present: 105
        },

        marks: {
            "Tropical Fruit Culture": 95,
            "Species and Plantation": 90,
            "Commercial Floriculture": 93,
            "Plant Breeding": 89,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 99
        }
    },

    "kkphp/2025-02": {

	name:"Usha sri",

        attendance: {
            total: 120,
            present: 120
        },

        marks: {
            "Tropical Fruit Culture": 88,
            "Species and Plantation": 91,
            "Commercial Floriculture": 84,
            "Plant Breeding": 80,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 90
        }
    },
 
    
    "kkphp/2025-03": {

	name:"Lavanya",

        attendance: {
            total: 120,
            present: 109
        },

        marks: {
            "Tropical Fruit Culture": 76,
            "Species and Plantation": 71,
            "Commercial Floriculture": 86,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 99
        }
    },

    
    "kkphp/2025-04": {

	name:"Arthi",

        attendance: {
            total: 120,
            present: 115
        },

        marks: {
            "Tropical Fruit Culture": 78,
            "Species and Plantation": 91,
            "Commercial Floriculture": 74,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 76,
            "Plant Pathology": 88
        }
    }
};


// LOGIN FUNCTION
function login(){

    const pin = document.getElementById("pin").value;

    if(students[pin]){

        // Save current student PIN
        localStorage.setItem("studentPin", pin);

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid PIN Number");

    }
}



// ATTENDANCE PAGE
function loadAttendance(){

    const pin = localStorage.getItem("studentPin");

    if(pin && students[pin]){

        const student = students[pin];

        const total = student.attendance.total;
        const present = student.attendance.present;

        const percentage =
        ((present / total) * 100).toFixed(2);

        document.getElementById("total").innerHTML = total;

        document.getElementById("present").innerHTML = present;

        document.getElementById("percentage").innerHTML =
        percentage + "%";

    } else {

        alert("Please login first");
        window.location.href = "index.html";

    }

} 