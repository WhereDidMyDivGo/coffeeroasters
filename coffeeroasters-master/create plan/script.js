console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.third_section');

    container.addEventListener('change', function(event) {
        if (event.target.classList.contains('n_checkbox')) {
            const index = [...container.querySelectorAll('.n_checkbox')].indexOf(event.target);
            container.querySelectorAll('details').forEach((detail, detailIndex) => {
                detail.open = index === detailIndex && event.target.checked;
            });
        }
    });

    container.addEventListener('toggle', function(event) {
        if (event.target.tagName === 'DETAILS') {
            const details = container.querySelectorAll('details');
            const checkboxes = container.querySelectorAll('.n_checkbox');
            checkboxes.forEach(checkbox => checkbox.checked = false);

            let highestOpenIndex = -1;
            details.forEach((detail, index) => {
                if (detail.open) highestOpenIndex = index;
            });

            if (highestOpenIndex !== -1) {
                checkboxes[highestOpenIndex].checked = true;
            }
        }
    }, true);
});