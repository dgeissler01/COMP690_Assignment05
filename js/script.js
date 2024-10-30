window.addEventListener('load', () => {
    let empForm = document.getElementById('empForm');
    empForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log(`ID: ${e.target.empId.value}`);
        console.log(`Name: ${e.target.name.value}`);
        console.log(`Extension: ${e.target.ext.value}`);
        console.log(`Email: ${e.target.email.value}`);
        console.log(`Department: ${e.target.dept.value}`);
    })
});