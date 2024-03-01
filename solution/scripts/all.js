document.addEventListener('DOMContentLoaded', function() {
    const resumeListDiv = document.querySelector('.resume-list');

    let resumeList = JSON.parse(localStorage.getItem('resumeList')) || [];

    const getTitle = (resume) => {
        if (resume.mainInfo["resume-title-field"]) {
            return resume.mainInfo["resume-title-field"]
        }
        return resume.mainInfo["fio"]
    }

    console.log(resumeList);

    const showResumeList = () => {
        if (resumeList.length > 0) {
            resumeListDiv.innerHTML = resumeList.map((resume) => {
                return (`
                    <div class="with-actions">
                        <p class="resume-text" testid="resume-item">${getTitle(resume)}</p>
                        <div class="resume-actions">
                            <button title="Действия" class="menu-btn" test-id="resume-actions">☰</button>
                            <div class="menu hidden">
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                        <input type="checkbox" class="select-checkbox" test-id="resume-checkbox">
                    </div>
                `);
            }).join('');
        } else {
            resumeListDiv.innerHTML = '';
        }
    }

    showResumeList();

    
    const menuBtns = document.querySelectorAll('.menu-btn');
    menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener('click', (e) => {
            const menu = e.target.nextElementSibling;
            menu.classList.toggle('hidden');
        });
    });
    
    let checkboxes = document.querySelectorAll('.select-checkbox');
    
    const isSomeChecked = () => {
        if (checkboxes.length === 0) return false;
        return Array.from(checkboxes).some((checkbox) => checkbox.checked);
    }

    const toggleDeleteBtn = () => {
        if (isSomeChecked()) {
            document.querySelector('.delete-btn').classList.remove('hidden');
        } else {
            document.querySelector('.delete-btn').classList.add('hidden');
        }
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            toggleDeleteBtn();
        });
    });

    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        const newResumeList = resumeList.filter((resume, index) => {
            return !checkboxes[index].checked;
        });

        localStorage.setItem('resumeList', JSON.stringify(newResumeList));
        resumeList = newResumeList;
        showResumeList();

        checkboxes = document.querySelectorAll('.select-checkbox');
        toggleDeleteBtn();
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                toggleDeleteBtn();
            });
        });              
    });

});