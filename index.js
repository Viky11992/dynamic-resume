var _a;
(_a = document
    .getElementById("dynamicresume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion:
    var resumeOutput = document.getElementById("resumeOutput");
    var dp = document.getElementById("dp");
    var userName = document.getElementById("name");
    var userNumber = document.getElementById("number");
    var skills = document.getElementById("skills");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var btn = document.getElementById("btn");
    if (dp &&
        userName &&
        userNumber &&
        skills &&
        education &&
        experience) {
        var userNameVal = userName.value;
        var userNumberVal = userNumber.value;
        var userSkillsVal = skills.value;
        var userEducationVal = education.value;
        var userexperienceVal = experience.value;
        var dpVal = dp.value;
        var picFile = (_a = dp.files) === null || _a === void 0 ? void 0 : _a[0];
        var picFileURL = picFile ? URL.createObjectURL(picFile) : '';
        var resumeOutputVal = "\n      <h1>".concat(userNameVal, "</h1>\n      ").concat(picFileURL ? "<img src=\"".concat(picFileURL, "\" alt=\"images\">") : '', "\n      <h3>personal info:</h3>\n      <strong>name:</strong><p>").concat(userNameVal, "</p>\n      <strong>number</strong><p>").concat(userNumberVal, "</p>\n         <h3>skills:</h3>\n      <p>").concat(userSkillsVal, "</p>\n         <h3>education:</h3>\n      <p>").concat(userEducationVal, "</p>\n        <h3>experience:</h3>\n      <p>").concat(userexperienceVal, "</p>\n      ");
        if (resumeOutputVal) {
            resumeOutput.innerHTML = resumeOutputVal;
        }
    }
});
