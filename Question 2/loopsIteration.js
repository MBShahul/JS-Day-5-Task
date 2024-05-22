let myResume = {
    firstName : "Shahul",
    lastName : "Hameed",
    email : "iamshahulms6@gmail.com",
    phone : "9876543210",
    workExperience : "3 Years",
    company : "Samsung",
    position : "Software Engineer",
    education : "Global Institute of Technology",
    degree : "Computer Science Engineering",
    graduationDate : "2019-05",
    skills : "JavaScript",
    github : "https://github.com",
    linkedin : "https://www.linkedin.com"
}

const keys = Object.keys(myResume);

//For loop
for (let i=0; i<keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${myResume[key]}`);
}

//For in Loop
for (let key in myResume) {
    console.log(`${key}: ${myResume[key]}`);
}

//For of loop
for (let [key, value] of Object.entries(myResume)) {
    console.log(`${key}: ${myResume[key]}`);
}

//For each loop
keys.forEach(key => {
    console.log(key + ':', myResume[key]);
});
