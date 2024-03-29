document.addEventListener("DOMContentLoaded", function () {
  const resumeListDiv = document.querySelector(".resume-list");
  const mainContainer = document.querySelector(".main-container");
  let checkboxes = document.querySelectorAll(".select-checkbox");


  let resumeList = JSON.parse(localStorage.getItem("resumeList")) || [];
  const modal = document.querySelector(".modal");
  
  const cancelModelBtn = document.querySelector(".cancel");
  const copyModelBtn = document.querySelector(".copy");

  cancelModelBtn.addEventListener("click", () => {
    localStorage.removeItem("copiedResume");
    modal.classList.add("hidden");
    mainContainer.classList.remove("hidden");
  });

  copyModelBtn.addEventListener("click", () => {

    const copiedResume = JSON.parse(localStorage.getItem("copiedResume"));
  

    console.log(copiedResume);

    const resultResume = {};
    const copyCheckboxes = document.querySelectorAll(".checkbox-copy");
    
    const checkboxFields = ["mainInfo", "personal-description", "interest", "language", "job", "education", "course"]
    copyCheckboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            resultResume[checkboxFields[index]] = copiedResume[checkboxFields[index]];
        }
        });
    
    localStorage.setItem("copiedResume", JSON.stringify(resultResume));
    localStorage.setItem("copy", "true");
  });


  const getTitle = (resume) => {
    if (resume.mainInfo["resume-title-field"]) {
      return resume.mainInfo["resume-title-field"];
    }
    return resume.mainInfo["fio"];
  };

  console.log(resumeList);

  const showResumeList = () => {
    if (resumeList.length > 0) {
      resumeListDiv.innerHTML = resumeList
        .map((resume) => {
          return `
                    <div class="with-actions">
                        <div class="resume-text" testid="resume-item">${getTitle(resume)}
                        <div class="resume-actions">
                            <button title="Действия" class="menu-btn" test-id="resume-actions">☰</button>
                            <div class="menu hidden">
                                <a href="/" class="open-btn" test-id="resume-actions__open">Открыть</a>
                                <button class="remove-btn" test-id="resume-actions__delete">Удалить</button>
                                <button class="copy-btn" test-id="resume-actions__copy">Копировать</button>
                            </div>
                        </div>
                        </div>
                        
                        <input type="checkbox" class="select-checkbox" test-id="resume-checkbox">
                    </div>
                `;
        })
        .join("");
    } else {
      resumeListDiv.innerHTML = "";
    }
  };


  const isSomeChecked = () => {
    if (checkboxes.length === 0) return false;
    return Array.from(checkboxes).some((checkbox) => checkbox.checked);
  };


  const toggleDeleteBtn = () => {
    if (isSomeChecked()) {
      document.querySelector(".delete-btn").classList.remove("hidden");
    } else {
      document.querySelector(".delete-btn").classList.add("hidden");
    }
  };

  const onChangeResumeList = (newResumeList) => {
    resumeList = newResumeList;
    localStorage.setItem("resumeList", JSON.stringify(resumeList));
    showResumeList();
    const menuBtns = document.querySelectorAll(".menu-btn");
    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", (e) => {
        const menu = e.target.nextElementSibling;
        menu.classList.toggle("hidden");
      });
    });

    checkboxes = document.querySelectorAll(".select-checkbox");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        toggleDeleteBtn();
      });
    });

    toggleDeleteBtn();

    const openBtns = document.querySelectorAll(".open-btn");
    openBtns.forEach((openBtn, index) => {
      openBtn.addEventListener("click", () => {
        localStorage.setItem("resumeData", JSON.stringify(resumeList[index]));
        localStorage.setItem("copiedResume", JSON.stringify(resumeList[index]));
        localStorage.setItem("preview", "true");
      });
    });

    const removeBtns = document.querySelectorAll(".remove-btn");
    removeBtns.forEach((removeBtn, index) => {
      removeBtn.addEventListener("click", () => {
        const newResumeList = resumeList.filter((resume, i) => {
          return i !== index;
        });

        localStorage.setItem("resumeList", JSON.stringify(newResumeList));
        onChangeResumeList(newResumeList);
      });
    });

    const copyBtns = document.querySelectorAll(".copy-btn");

    copyBtns.forEach((copyBtn, index) => {
      copyBtn.addEventListener("click", () => {
        
        const copiedResume = JSON.parse(JSON.stringify(resumeList[index]));
        localStorage.setItem("copiedResume", JSON.stringify(copiedResume));
        modal.classList.remove("hidden");
        mainContainer.classList.add("hidden");
      });
    });
  };

  onChangeResumeList(resumeList);

  const deleteBtn = document.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    checkboxes = document.querySelectorAll(".select-checkbox");
    const newResumeList = resumeList.filter((resume, index) => {
      return !checkboxes[index].checked;
    });

    localStorage.setItem("resumeList", JSON.stringify(newResumeList));
    onChangeResumeList(newResumeList);

  });
});
