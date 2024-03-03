document.addEventListener("DOMContentLoaded", function () {

  const addInterestBtn = document.querySelector(
    'button[test-id="add-interest"]',
  );
  const interestsContainer = document.querySelector(".interest-container");

  addInterestBtn.addEventListener("click", function () {

    const interestsCount = interestsContainer.querySelectorAll("label").length;

    const newInterest = `
      <label>
        <span>${interestsCount + 1} интерес</span>
        <input type="text" test-id="interest" name="interest">
      </label>
    `;
    interestsContainer.insertAdjacentHTML("beforeend", newInterest);
  });

  const removeInterestBtn = document.querySelector(
    'button[test-id="remove-interest"]',
  );
  removeInterestBtn.addEventListener("click", function () {
    const inputs = interestsContainer.getElementsByTagName("label");
    if (inputs.length > 0) {
      interestsContainer.removeChild(inputs[inputs.length - 1]);
    }
  });

  const addLanguageBtn = document.querySelector(
    'button[test-id="add-language"]',
  );
  const languagesContainer = document.querySelector(".language-container");

  addLanguageBtn.addEventListener("click", function () {
    const newLanguage = `
      <div class="language">
        <label>
          <span>Язык</span>
          <input type="text" test-id="language-name" name="name">
        </label>
        <label>
          <span>Уровень</span>
          <input type="text" test-id="language-level" name="level">
        </label>
      </div>
    `;
    languagesContainer.insertAdjacentHTML("beforeend", newLanguage);
  });

  const removeLanguageBtn = document.querySelector(
    'button[test-id="remove-language"]',
  );
  removeLanguageBtn.addEventListener("click", function () {
    const languages = languagesContainer.querySelectorAll(".language");
    if (languages.length > 0) {
      languagesContainer.removeChild(languages[languages.length - 1]);
    }
  });

  const addJobBtn = document.querySelector('button[test-id="add-job"]');
  const workContainer = document.querySelector(".job-container");

  addJobBtn.addEventListener("click", function () {
    const newJob = `
      <div class="job">
      <label>
        <span>Должность</span>
        <input type="text" test-id="job-title" name="title">
      </label>
        <label>
          <span>Начало</span>
          <input type="text" test-id="job-date-start" name="startDate">
        </label>
        <label>
          <span>Конец</span>
          <input type="text" test-id="job-date-end" name="endDate">
        </label>
        
        <label>
        <span>Место работы</span>
        <input type="text" test-id="job-place" name="place">
      </label>
        <label>
          <span>Описание</span>
          <textarea class="description-area" test-id="job-description" name="description"></textarea>
        </label>
      </div>
    `;
    workContainer.insertAdjacentHTML("beforeend", newJob);
  });

  const removeJobBtn = document.querySelector('button[test-id="remove-job"]');
  removeJobBtn.addEventListener("click", function () {
    const works = workContainer.querySelectorAll(".job");
    if (works.length > 0) {
      workContainer.removeChild(works[works.length - 1]);
    }
  });

  const addEducationBtn = document.querySelector(
    'button[test-id="add-education"]',
  );
  const educationContainer = document.querySelector(".education-container");

  addEducationBtn.addEventListener("click", function () {
    const newEducation = `
      <div class="education">
        <label>
          <span>Высшее образование</span>
          <input type="text" test-id="education-title" name="title">
        </label>
        <label>
          <span>Начало</span>
          <input type="text" test-id="education-date-start" name="startDate">
        </label>
        <label>
          <span>Конец</span>
          <input type="text" test-id="education-date-end" name="endDate">
        </label>
        <label>
          <span>Место обучения</span>
          <input type="text" test-id="education-place" name="place">
        </label>
        <label>
          <span>Описание</span>
          <textarea class="description-area" test-id="education-description" name="description"></textarea>
        </label>
      </div>
    `;
    educationContainer.insertAdjacentHTML("beforeend", newEducation);
  });

  const removeEducationBtn = document.querySelector(
    'button[test-id="remove-education"]',
  );
  removeEducationBtn.addEventListener("click", function () {
    const educations = educationContainer.querySelectorAll(".education");
    if (educations.length > 0) {
      educationContainer.removeChild(educations[educations.length - 1]);
    }
  });

  const addCourseBtn = document.querySelector('button[test-id="add-course"]');
  const courseContainer = document.querySelector(".course-container");

  addCourseBtn.addEventListener("click", function () {
    const newCourse = `
      <div class="course">
        <label>
          <span>Название</span>
          <input type="text" test-id="course-title" name="title">
        </label>
        <label>
          <span>Начало</span>
          <input type="text" test-id="course-date-start" name="startDate">
        </label>
        <label>
          <span>Конец</span>
          <input type="text" test-id="course-date-end" name="endDate">
        </label>
        <label>
        <span>Организация</span>
        <input type="text" test-id="course-place" name="place">
      </label>
      </div>
    `;
    courseContainer.insertAdjacentHTML("beforeend", newCourse);
  });

  const removeCourseBtn = document.querySelector(
    'button[test-id="remove-course"]',
  );
  removeCourseBtn.addEventListener("click", function () {
    const courses = courseContainer.getElementsByClassName("course");
    if (courses.length > 0) {
      courseContainer.removeChild(courses[courses.length - 1]);
    }
  });

  // Ивент, на который реагирует resume.js (появление резюме на странице)
  const resumeDisplayedEvent = new CustomEvent("resumeDisplayed");

  if (localStorage.getItem("preview") === "true") {
    localStorage.removeItem("preview");
    window.dispatchEvent(resumeDisplayedEvent);
  }

  const createBtn = document.querySelector(".create");
  const fioInput = document.querySelector('input[name="fio"]');
  const form = document.querySelector("form");

    // Если в локалсторадже есть скопированное резюме, то заполнить все поля формы, что там есть, в соответствии с ним
    if (localStorage.getItem("copiedResume")) {
      const copiedResume = JSON.parse(localStorage.getItem("copiedResume"));

      localStorage.removeItem("copiedResume");
      
      const copiedResumeFields = Object.keys(copiedResume);
      copiedResumeFields.forEach((field) => {
      
        if (field === "mainInfo") {

           // Если это было получено не для открытия резюме, а именно для копирования
           if (localStorage.getItem("copy")) {
            delete copiedResume.mainInfo["resume-title-field"];
          }

          const mainInfo = copiedResume[field];
          for (let key in mainInfo) {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
              input.value = mainInfo[key];
            }
          }
        }

        else if (field === "personal-description") {
          const input = form.querySelector(".about-me");
          if (input) {
            input.value = copiedResume[field];
          }
        }

        // Остались случаи, когда поле - массив объектов. 
        else {
          const arrayLength = copiedResume[field].length;
          if (arrayLength > 1) {
            for (let i = 1; i < arrayLength; i++) {
              const btn = form.querySelector(`button[test-id="add-${field}"]`);
              btn.click();
            }
          }

          const container = form.querySelector(`.${field}-container`);
          const inputs = container.querySelectorAll("input, textarea");
          
          copiedResume[field].forEach((item, index) => {

            if (field === "interest") {
              inputs.forEach((input, index) => {
                input.value = copiedResume[field][index];
              });
            }

            else {
              const keys = Object.keys(item);
              keys.forEach((key) => {
                const inputsWithKeyName = container.querySelectorAll(`[name="${key}"]`);
                
                inputsWithKeyName[index].value = copiedResume[field][index][key];
              })
            }

            
          });
        }

        localStorage.removeItem("copy");

      })}

       
    

  const checkFio = () => {
    if (fioInput.value.length > 0) {
      createBtn.disabled = false;
    } else {
      createBtn.disabled = true;
    }
  };

  checkFio();

  fioInput.addEventListener("input", function () {
    checkFio();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    // Просто решил разделить данные так, чтобы потом их было удобно копировать
    const excludedFields = [
      "name",
      "level",
      "interest",
      "place",
      "title",
      "startDate",
      "endDate",
      "description",
      "personal-description",
    ];

    excludedFields.forEach((field) => {
      formData.delete(field);
    });

    // Сбор данных об интересах
    const interestsData = [];

    const interestInputs = document.querySelectorAll('input[name="interest"]');
    interestInputs.forEach((input) => {
      interestsData.push(input.value);
    });

    // Сбор данных о языках
    const languagesData = [];
    const languageContainers = document.querySelectorAll(".language");
    languageContainers.forEach((container) => {
      const languageData = {
        name: container.querySelector('input[name="name"]').value,
        level: container.querySelector('input[name="level"]').value,
      };
      languagesData.push(languageData);
    });

    // Сбор данных о себе
    const personalDescription = document.querySelector('.about-me').value;
    

    // Сбор данных о работе
    const jobsData = [];
    let jobContainers = document.querySelectorAll(".job");

    jobContainers = Array.from(jobContainers);
    
    jobContainers.forEach((container) => {
      const jobData = {
        title: container.querySelector('input[name="title"]').value,
        place: container.querySelector('input[name="place"]').value,
        startDate: container.querySelector('input[name="startDate"]').value,
        endDate: container.querySelector('input[name="endDate"]').value,
        description: container.querySelector('textarea[name="description"]')
          .value,
      };
      jobsData.push(jobData);
    });


    // Сбор данных об образовании
    const educationsData = [];
    let educationContainers = document.querySelectorAll(".education");

    educationContainers = Array.from(educationContainers)

    educationContainers.forEach((container) => {
      const educationData = {
        title: container.querySelector('input[name="title"]').value,
        startDate: container.querySelector('input[name="startDate"]').value,
        endDate: container.querySelector('input[name="endDate"]').value,
        place: container.querySelector('input[name="place"]').value,
        description: container.querySelector(
          'textarea[name="description"]',
        ).value,
      };
      educationsData.push(educationData);
    });


    // Сбор данных о курсах
    const coursesData = [];
    let courseContainers = document.querySelectorAll(".course");

    courseContainers = Array.from(courseContainers)

    courseContainers.forEach((container) => {
      const courseData = {
        title: container.querySelector('input[name="title"]').value,
        place: container.querySelector('input[name="place"]').value,
        startDate: container.querySelector('input[name="startDate"]').value,
        endDate: container.querySelector('input[name="endDate"]').value,
      };
      coursesData.push(courseData);
    });


    // ВСЁ В ЛОКАЛСТОРАДЖ БОГУ LOCALSTORAGE
    const data = {
      'mainInfo': Object.fromEntries(formData),
      'personal-description': personalDescription,
      'interest': interestsData,
      'language': languagesData,
      'job': jobsData,
      'education': educationsData,
      'course': coursesData,
    };

    localStorage.setItem("resumeData", JSON.stringify(data));

    // Переход на страницу просмотра резюме
    window.dispatchEvent(resumeDisplayedEvent);
  });
});