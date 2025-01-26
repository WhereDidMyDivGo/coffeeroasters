console.log('script.js loaded');

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
            checkboxes.forEach(checkbox => checkbox.checked = false);

            let highestOpenIndex = -1;
            for (let i = details.length - 1; i >= 0; i--) {
                if (details[i].open) {
                    highestOpenIndex = i;
                    break;
                }
            }

            if (highestOpenIndex !== -1) {
                checkboxes[highestOpenIndex].checked = true;
            }
        });
    });
});