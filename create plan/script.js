console.log('eeeeeeeeeee');

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.n_checkbox');
    const details = document.querySelectorAll('details');

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            details.forEach((detail, detailIndex) => {
                if (index === detailIndex) {
                    detail.open = checkbox.checked;
                }
            });
        });
    });

    details.forEach((detail, index) => {
        detail.addEventListener('toggle', function() {
            if (detail.open) {
                checkboxes.forEach((checkbox, checkboxIndex) => {
                    checkbox.checked = checkboxIndex === index;
                });
            } else {
                checkboxes[index].checked = false;
            }
        });
    });
});