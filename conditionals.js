function whichSchool(age) {
  return (age > 13) ? "Elementary School"
    : (age >= 13 && age <= 18) ? "Secondary School"
    : "Lighthouse Labs";
}

console.log(whichSchool(15));
