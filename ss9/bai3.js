var courses = ['C++', 'Java', 'Javascript'];

function addCourse(courses, nameAddCourse) {
  courses.push(nameAddCourse);
  return courses;
}
courses = addCourse(courses, 'Go');

console.log(courses);

function getFirstElem(courses) {
  return courses[0];
}

console.log(getFirstElem(courses));

function joinArr(courses, appChar) {
  var res = '';
  for (var i = 0; i < courses.length; i++) {
    res += courses[i];
    if (i != courses.length - 1) {
      res += appChar;
    }
  }
  return res;
}
var res1 = joinArr(courses, ',');

var res2 = joinArr(courses, ' * ');

console.log(res1);
console.log(res2);

