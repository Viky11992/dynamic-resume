document
  .getElementById("dynamicresume")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion:

    const resumeOutput = document.getElementById(
      "resumeOutput"
    ) as HTMLDivElement;

    
    
    const dp = document.getElementById("dp") as HTMLInputElement;
    const userName = document.getElementById("name") as HTMLInputElement;
    const userNumber = document.getElementById("number") as HTMLInputElement;
    const skills = document.getElementById("skills") as HTMLTextAreaElement;
    const education = document.getElementById("education") as HTMLTextAreaElement;
    const experience = document.getElementById("experience") as HTMLTextAreaElement;
    const btn = document.getElementById("btn") as HTMLButtonElement;

    

    if (
      dp &&
      userName &&
      userNumber &&
      skills &&
      education &&
      experience
    ) {
      const userNameVal = userName.value;
      const userNumberVal = userNumber.value;
      const userSkillsVal = skills.value;
      const userEducationVal = education.value;
      const userexperienceVal = experience.value;
      const dpVal = dp.value;

      const picFile=  dp.files?.[0];
      const picFileURL=  picFile?URL.createObjectURL(picFile):'';



      const resumeOutputVal = `
      <h1>${userNameVal}</h1>
      ${picFileURL? `<img src="${picFileURL}" alt="images">`:''}
      <h3>personal info:</h3>
      <strong>name:</strong><p>${userNameVal}</p>
      <strong>number</strong><p>${userNumberVal}</p>
         <h3>skills:</h3>
      <p>${userSkillsVal}</p>
         <h3>education:</h3>
      <p>${userEducationVal}</p>
        <h3>experience:</h3>
      <p>${userexperienceVal}</p>
      `;
      if (resumeOutputVal) {
        resumeOutput.innerHTML = resumeOutputVal;
      }
    }
  });
