var courses = ["html", "css", "javascript"];

var newCourse = prompt("Enter course name");

var index = courses.findIndex((course) => course === newCourse);

if (index === -1) {

    courses.push(newCourse);

    alert("Course added successfully");

} else {

    alert("Course already exists");

}

console.log(courses);