// Multiple Students Data
const students = {

    "23001-CM-001": {

	name:"Nithya",

        attendance: {
            total: 120,
            present: 105
        },

        marks: {
            "Plant Breeding": 95,
            "Tropical Fruit Culture": 90,
            "Commercial Floriculture": 93,
            "Species and Plantation": 89,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 99
        }
    },

    "23001-CM-002": {

	name:"Usha sri",

        attendance: {
            total: 120,
            present: 120
        },

        marks: {
            "Plant Breeding": 88,
            "Tropical Fruit Culture": 91,
            "Commercial Floriculture": 84,
            "Species and Plantation": 80,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 90
        }
    },
 
    
    "23001-CM-003": {

	name:"Lavanya",

        attendance: {
            total: 120,
            present: 109
        },

        marks: {
            "Plant Breeding": 76,
            "Tropical Fruit Culture": 71,
            "Commercial Floriculture": 86,
            "Species and Plantation": 90,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 99
        }
    },

    
    "23001-CM-004": {

	name:"Arthi",

        attendance: {
            total: 120,
            present: 115
        },

        marks: {
            "Plant Breeding": 78,
            "Tropical Fruit Culture": 91,
            "Commercial Floriculture": 74,
            "Species and Plantation": 90,
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

    const student = students[pin];

    if(student){

        const total = student.attendance.total;
        const present = student.attendance.present;

        const percentage =
        ((present / total) * 100).toFixed(2);

        document.getElementById("total").innerHTML = total;

        document.getElementById("present").innerHTML = present;

        document.getElementById("percentage").innerHTML =
        percentage + "%";

    }

}