// Multiple Students Data
const students = {

    "KKPHP/2025-01": {

	name:"G.Charan",

        attendance: {
            total: 120,
            present: 105
        },

	gpa:"92%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 95,
            "Species and Plantation": 90,
            "Commercial Floriculture": 93,
            "Plant Breeding": 89,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 99
        }
    },

    "KKPHP/2025-02": {

	name:"K.Akash Reddy",

        attendance: {
            total: 120,
            present: 120
        },

	gpa:"86.5%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 88,
            "Species and Plantation": 91,
            "Commercial Floriculture": 84,
            "Plant Breeding": 80,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 90
        }
    },
 
    
    "KKPHP/2025-03": {

	name:"L.NagaKishore",

        attendance: {
            total: 120,
            present: 109
        },

	gpa:"84.6%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 76,
            "Species and Plantation": 71,
            "Commercial Floriculture": 86,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 99
        }
    },

    
    "KKPHP/2025-04": {

	name:"L.Prem Kumar Naik",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"82.8%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 78,
            "Species and Plantation": 91,
            "Commercial Floriculture": 74,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 76,
            "Plant Pathology": 88
        }
    },


    "KKPHP/2025-05": {

	name:"M.Raghava",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"82.8%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 88,
            "Species and Plantation": 91,
            "Commercial Floriculture": 74,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 76,
            "Plant Pathology": 78
        }
    },


    "KKPHP/2025-06": {

	name:"M.Limayath Basha",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"81.1%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 88,
            "Species and Plantation": 61,
            "Commercial Floriculture": 74,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 88
        }
    },

    
    "KKPHP/2025-07": {

	name:"M.Chanakya",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"86.1%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 98,
            "Species and Plantation": 71,
            "Commercial Floriculture": 84,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 88
        }
    },


    "KKPHP/2025-08": {

	name:"M.Ananda Raju",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"77.8%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 88,
            "Species and Plantation": 61,
            "Commercial Floriculture": 74,
            "Plant Breeding": 80,
            "Manures and Fertilizers": 76,
            "Plant Pathology": 88
        }
    },

    
    "KKPHP/2025-09": {

	name:"M.Prathyusha",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"77.8%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 78,
            "Species and Plantation": 71,
            "Commercial Floriculture": 74,
            "Plant Breeding": 80,
            "Manures and Fertilizers": 86,
            "Plant Pathology": 78
        }
    },

    
    "KKPHP/2025-10": {

	name:"N.Rajesh",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"74.5%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 98,
            "Species and Plantation": 61,
            "Commercial Floriculture": 74,
            "Plant Breeding": 60,
            "Manures and Fertilizers": 76,
            "Plant Pathology": 78
        }
    },

    
    "KKPHP/2025-11": {

	name:"S.Yasmin",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"81.3%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 88,
            "Species and Plantation": 61,
            "Commercial Floriculture": 84,
            "Plant Breeding": 89,
            "Manures and Fertilizers": 78,
            "Plant Pathology": 88
        }
    },

 
    "KKPHP/2025-12": {

	name:"Y.UshaSri",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"92.3%",
        result:"PASS",

        marks: {
            "Tropical Fruit Culture": 95,
            "Species and Plantation": 91,
            "Commercial Floriculture": 84,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 96,
            "Plant Pathology": 98
        }
    },


    "KKPHP/2025-13": {

	name:"M.Jahnavi",

        attendance: {
            total: 120,
            present: 115
        },

	gpa:"82.8%",
        result:"PASS",	
        
        marks: {
            "Tropical Fruit Culture": 78,
            "Species and Plantation": 91,
            "Commercial Floriculture": 74,
            "Plant Breeding": 90,
            "Manures and Fertilizers": 76,
            "Plant Pathology": 88
        }
    },


};


// LOGIN FUNCTION
function login() {
    const pin = document.getElementById("pin").value.trim();

    if (students[pin]) {
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

	document.getElementById("gpa").innerHTML =script.js
 	student.gpa;

	document.getElementById("result").innerHTML =
	student.result;

    } else {

        alert("Please login first");
        window.location.href = "index.html";

    }

} 