document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Сбор данных об остальных полях формы
    const formData = new FormData(form);

    const excludedFields = [
      "language-name", "language-level", "interest",
      "job-place", "job-title", "job-date-start", "job-date-end", "job-description",
      "education-title", "education-place", "education-date-start", "education-date-end", "education-description",
      "course-title", "course-place", "course-date-start", "course-date-end"
    ];

    excludedFields.forEach(field => {
      formData.delete(field);
    });


    // Сбор данных об интересах
    const interestsData = []

    const interestInputs = document.querySelectorAll('input[name="interest"]');
    interestInputs.forEach(input => {
      interestsData.push(input.value);
    });

    // Сбор данных о языках
    const languagesData = [];
    const languageContainers = document.querySelectorAll(".language");
    languageContainers.forEach(container => {
      const languageData = {
        name: container.querySelector('input[name="language-name"]').value,
        level: container.querySelector('input[name="language-level"]').value
      };
      languagesData.push(languageData);
    });

    // Сбор данных о работе
    const jobsData = [];
    const jobContainers = document.querySelectorAll(".work");
    jobContainers.forEach(container => {
      const jobData = {
        place: container.querySelector('input[name="job-place"]').value,
        title: container.querySelector('input[name="job-title"]').value,
        startDate: container.querySelector('input[name="job-date-start"]').value,
        endDate: container.querySelector('input[name="job-date-end"]').value,
        description: container.querySelector('textarea[name="job-description"]').value
      };
      jobsData.push(jobData);
    });

    // Сбор данных об образовании
    const educationsData = [];
    const educationContainers = document.querySelectorAll(".education");
    educationContainers.forEach(container => {
      const educationData = {
        title: container.querySelector('input[name="education-title"]').value,
        place: container.querySelector('input[name="education-place"]').value,
        startDate: container.querySelector('input[name="education-date-start"]').value,
        endDate: container.querySelector('input[name="education-date-end"]').value,
        description: container.querySelector('textarea[name="education-description"]').value
      };
      educationsData.push(educationData);
    });

    // Сбор данных о курсах
    const coursesData = [];
    const courseContainers = document.querySelectorAll(".course");
    courseContainers.forEach(container => {
      const courseData = {
        title: container.querySelector('input[name="course-title"]').value,
        organization: container.querySelector('input[name="course-place"]').value,
        startDate: container.querySelector('input[name="course-date-start"]').value,
        endDate: container.querySelector('input[name="course-date-end"]').value
      };
      coursesData.push(courseData);
    });


    // ВСЁ В ЛОКАЛСТОРАДЖ БОГУ LOCALSTORAGE
    const data = {
      mainInfo: Object.fromEntries(formData),
      interests: interestsData,
      languages: languagesData,
      jobs: jobsData,
      educations: educationsData,
      courses: coursesData
    };

    localStorage.setItem("resumeData", JSON.stringify(data));

    const e = new CustomEvent('resumeDisplayed');
    window.dispatchEvent(e);

    
  });

  // Добавление интереса
  const addInterestBtn = document.querySelector('button[test-id="add-interest"]');
  const interestsContainer = document.querySelector(".interest-container");

  addInterestBtn.addEventListener("click", function () {
    const newInterest = `
      <label>
        <span>Ещё один интерес</span>
        <input type="text" test-id="interest" name="interest">
      </label>
    `;
    interestsContainer.insertAdjacentHTML("beforeend", newInterest);
  });

  // Удаление интереса
  const removeInterestBtn = document.querySelector('button[test-id="remove-interest"]');
  removeInterestBtn.addEventListener("click", function () {
    const inputs = interestsContainer.getElementsByTagName("label");
    if (inputs.length > 0) {
      interestsContainer.removeChild(inputs[inputs.length - 1]);
    }
  });

  // Добавление языка
  const addLanguageBtn = document.querySelector('button[test-id="add-language"]');
  const languagesContainer = document.querySelector(".language-container");

  addLanguageBtn.addEventListener("click", function () {
    const newLanguage = `
      <div class="language">
        <label>
          <span>Язык</span>
          <input type="text" test-id="language-name" name="language-name">
        </label>
        <label>
          <span>Уровень</span>
          <input type="text" test-id="language-level" name="language-level">
        </label>
      </div>
    `;
    languagesContainer.insertAdjacentHTML("beforeend", newLanguage);
  });

  // Удаление языка
  const removeLanguageBtn = document.querySelector('button[test-id="remove-language"]');
  removeLanguageBtn.addEventListener("click", function () {
    const languages = languagesContainer.getElementsByClassName("language");
    if (languages.length > 0) {
      languagesContainer.removeChild(languages[languages.length - 1]);
    }
  });

  // Добавление работы
  const addJobBtn = document.querySelector('button[test-id="add-job"]');
  const workContainer = document.querySelector(".work-container");

  addJobBtn.addEventListener("click", function () {
    const newJob = `
      <div class="work">
        <label>
          <span>Место работы</span>
          <input type="text" test-id="job-place" name="job-place">
        </label>
        <label>
          <span>Должность</span>
          <input type="text" test-id="job-title" name="job-title">
        </label>
        <label>
          <span>Начало</span>
          <input type="date" test-id="job-date-start" name="job-date-start">
        </label>
        <label>
          <span>Конец</span>
          <input type="date" test-id="job-date-end" name="job-date-end">
        </label>
        <label>
          <span>Описание</span>
          <textarea class="description-area" test-id="job-description" name="job-description"></textarea>
        </label>
      </div>
    `;
    workContainer.insertAdjacentHTML("beforeend", newJob);
  });

  // Удаление работы
  const removeJobBtn = document.querySelector('button[test-id="remove-job"]');
  removeJobBtn.addEventListener("click", function () {
    const works = workContainer.getElementsByClassName("work");
    if (works.length > 0) {
      workContainer.removeChild(works[works.length - 1]);
    }
  });

  // Добавление образования
  const addEducationBtn = document.querySelector('button[test-id="add-education"]');
  const educationContainer = document.querySelector(".education-container");

  addEducationBtn.addEventListener("click", function () {
    const newEducation = `
      <div class="education">
        <label>
          <span>Высшее образование</span>
          <input type="text" test-id="education-title" name="education-title">
        </label>
        <label>
          <span>Место обучения</span>
          <input type="text" test-id="education-place" name="education-place">
        </label>
        <label>
          <span>Начало</span>
          <input type="date" test-id="education-date-start" name="education-date-start">
        </label>
        <label>
          <span>Конец</span>
          <input type="date" test-id="education-date-end" name="education-date-end">
        </label>
        <label>
          <span>Описание</span>
          <textarea class="description-area" test-id="education-description" name="education-description"></textarea>
        </label>
      </div>
    `;
    educationContainer.insertAdjacentHTML("beforeend", newEducation);
  });

  // Удаление образования
  const removeEducationBtn = document.querySelector('button[test-id="remove-education"]');
  removeEducationBtn.addEventListener("click", function () {
    const educations = educationContainer.getElementsByClassName("education");
    if (educations.length > 0) {
      educationContainer.removeChild(educations[educations.length - 1]);
    }
  });

  // Добавление курсов
  const addCourseBtn = document.querySelector('button[test-id="add-course"]');
  const courseContainer = document.querySelector(".course-container");

  addCourseBtn.addEventListener("click", function () {
    const newCourse = `
      <div class="course">
        <label>
          <span>Название</span>
          <input type="text" test-id="course-title" name="course-title">
        </label>
        <label>
          <span>Организация</span>
          <input type="text" test-id="course-place" name="course-place">
        </label>
        <label>
          <span>Начало</span>
          <input type="date" test-id="course-date-start" name="course-date-start">
        </label>
        <label>
          <span>Конец</span>
          <input type="date" test-id="course-date-end" name="course-date-end">
        </label>
      </div>
    `;
    courseContainer.insertAdjacentHTML("beforeend", newCourse);
  });

  // Удаление курсов
  const removeCourseBtn = document.querySelector('button[test-id="remove-course"]');
  removeCourseBtn.addEventListener("click", function () {
    const courses = courseContainer.getElementsByClassName("course");
    if (courses.length > 0) {
      courseContainer.removeChild(courses[courses.length - 1]);
    }
  });
});
