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
                        <button title="Действия" class="menu-btn" test-id="resume-actions">☰</button>
                        <input type="checkbox" class="select-checkbox" test-id="resume-checkbox">
                    </div>
                `);
            }).join('');
        } else {
            resumeListDiv.innerHTML = '';
        }
    }

    showResumeList();
    
    const checkboxes = document.querySelectorAll('.select-checkbox');
    
    const isSomeChecked = () => {
        return Array.from(checkboxes).some((checkbox) => checkbox.checked);
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (isSomeChecked()) {
                document.querySelector('.delete-btn').classList.remove('hidden');
            } else {
                document.querySelector('.delete-btn').classList.add('hidden');
            }
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
        
    });

});