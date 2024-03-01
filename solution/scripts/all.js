document.addEventListener('DOMContentLoaded', function() {
    const resumeListDiv = document.getElementById('resume-list');

    const resumeList = localStorage.getItem('resumeList') || [];

    console.log(resumeList);

    if (resumeList.length > 0) {
        resumeListDiv.innerHTML = resumeList.map((resume) => {
            return `<li>${resume.mainInfo.title}</li>`;
        }).join('');
    }

});