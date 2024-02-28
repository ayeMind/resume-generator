document.addEventListener("DOMContentLoaded", function () {
  const addInterestBtn = document.querySelector(
    'button[test-id="add-interest"]',
  );
  const removeInterestBtn = document.querySelector(
    'button[test-id="remove-interest"]',
  );
  const interestsContainer = document.querySelector(".interest-container");


  // Добавление интереса
  addInterestBtn.addEventListener("click", function () {
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = "Ещё один интерес";

    const input = document.createElement("input");
    input.setAttribute("test-id", "interest");
    input.type = "text";
    input.name = "interest";

    label.appendChild(span);
    label.appendChild(input);

    interestsContainer.appendChild(label);
  });

    // Удаление интереса
  removeInterestBtn.addEventListener("click", function () {
    const inputs = interestsContainer.getElementsByTagName("label");
    if (inputs.length > 0) {
      interestsContainer.removeChild(inputs[inputs.length - 1]);
    }
  });


    const addLanguageBtn = document.querySelector('button[test-id="add-language"]');
    const removeLanguageBtn = document.querySelector('button[test-id="remove-language"]');
    const languagesContainer = document.querySelector(".language-container");

    // Добавление языка
    addLanguageBtn.addEventListener("click", function () {
        const language = document.createElement("div");
        language.className = "language";

        const labelLanguage = document.createElement("label");
        const span = document.createElement("span");
        span.textContent = "Язык";

        const inputLanguage = document.createElement("input");
        inputLanguage.type = "text";
        inputLanguage.setAttribute("test-id", "language-name");

        labelLanguage.appendChild(span);
        labelLanguage.appendChild(inputLanguage);

        const labelLevel = document.createElement("label");
        const spanLevel = document.createElement("span");
        spanLevel.textContent = "Уровень";

        const inputLevel = document.createElement("input");
        inputLevel.type = "text";
        inputLevel.setAttribute("test-id", "language-level");

        labelLevel.appendChild(spanLevel);
        labelLevel.appendChild(inputLevel);

        language.appendChild(labelLanguage);
        language.appendChild(labelLevel);

        languagesContainer.appendChild(language);
    
    });

    // Удаление языка
    removeLanguageBtn.addEventListener("click", function () {
        const languages = languagesContainer.getElementsByClassName("language");
        if (languages.length > 0) {
            languagesContainer.removeChild(languages[languages.length - 1]);
        }
    });

    const addJobBtn = document.querySelector('button[test-id="add-job"]');
    const removeJobBtn = document.querySelector('button[test-id="remove-job"]');
    const workContainer = document.querySelector(".work-container");
  
    addJobBtn.addEventListener("click", function () {
      const work = document.createElement("div");
      work.className = "work";
  
      const labels = [
        { labelText: "Место работы", inputTestId: "job-place" },
        { labelText: "Должность", inputTestId: "job-title" },
        { labelText: "Начало", inputTestId: "job-date-start", inputType: "date" },
        { labelText: "Конец", inputTestId: "job-date-end", inputType: "date" },
        { labelText: "Описание", inputTestId: "job-description", inputTag: "textarea" },
      ];
  
      labels.forEach(labelInfo => {
        const label = document.createElement("label");
        const span = document.createElement("span");
        span.textContent = labelInfo.labelText;
  
        const input = document.createElement(labelInfo.inputTag || "input");
        input.type = labelInfo.inputType || "text";
        input.setAttribute("test-id", labelInfo.inputTestId);
  
        label.appendChild(span);
        label.appendChild(input);
        work.appendChild(label);
      });
  
      workContainer.appendChild(work);
    });
  
    removeJobBtn.addEventListener("click", function () {
      const works = workContainer.getElementsByClassName("work");
      if (works.length > 0) {
        workContainer.removeChild(works[works.length - 1]);
      }
    });
  
    // Функция для добавления образования
    const addEducationBtn = document.querySelector('button[test-id="add-education"]');
    const removeEducationBtn = document.querySelector('button[test-id="remove-education"]');
    const educationContainer = document.querySelector(".education-container");
  
    addEducationBtn.addEventListener("click", function () {
      const education = document.createElement("div");
      education.className = "education";
  
      const labels = [
        { labelText: "Высшее образование", inputTestId: "education-title" },
        { labelText: "Место обучения", inputTestId: "education-place" },
        { labelText: "Начало", inputTestId: "education-date-start", inputType: "date" },
        { labelText: "Конец", inputTestId: "education-date-end", inputType: "date" },
        { labelText: "Описание", inputTestId: "education-description", inputTag: "textarea" },
      ];
  
      labels.forEach(labelInfo => {
        const label = document.createElement("label");
        const span = document.createElement("span");
        span.textContent = labelInfo.labelText;
  
        const input = document.createElement(labelInfo.inputTag || "input");
        if (labelInfo.inputTag === "textarea") {
          input.className = "description"
        }
        input.type = labelInfo.inputType || "text";
        input.setAttribute("test-id", labelInfo.inputTestId);
  
        label.appendChild(span);
        label.appendChild(input);
        education.appendChild(label);
      });
  
      educationContainer.appendChild(education);
    });
  
    removeEducationBtn.addEventListener("click", function () {
      const educations = educationContainer.getElementsByClassName("education");
      if (educations.length > 0) {
        educationContainer.removeChild(educations[educations.length - 1]);
      }
    });
  
    // Функция для добавления курсов
    const addCourseBtn = document.querySelector('button[test-id="add-course"]');
    const removeCourseBtn = document.querySelector('button[test-id="remove-course"]');
    const courseContainer = document.querySelector(".course-container");
  
    addCourseBtn.addEventListener("click", function () {
      const course = document.createElement("div");
      course.className = "course";
  
      const labels = [
        { labelText: "Название", inputTestId: "course-title" },
        { labelText: "Организация", inputTestId: "course-place" },
        { labelText: "Начало", inputTestId: "course-date-start", inputType: "date" },
        { labelText: "Конец", inputTestId: "course-date-end", inputType: "date" },
      ];
  
      labels.forEach(labelInfo => {
        const label = document.createElement("label");
        const span = document.createElement("span");
        span.textContent = labelInfo.labelText;
  
        const input = document.createElement("input");
        input.type = labelInfo.inputType || "text";
        input.setAttribute("test-id", labelInfo.inputTestId);
  
        label.appendChild(span);
        label.appendChild(input);
        course.appendChild(label);
      });
  
      courseContainer.appendChild(course);
    });
  
    removeCourseBtn.addEventListener("click", function () {
      const courses = courseContainer.getElementsByClassName("course");
      if (courses.length > 0) {
        courseContainer.removeChild(courses[courses.length - 1]);
      }
    });

});
