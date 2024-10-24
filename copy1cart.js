document.addEventListener('DOMContentLoaded', function () {
    const emptyCartMessage = document.querySelector('.empty-cart-message');

    document.addEventListener('click', function (e) {
        const target = e.target;

        // Check if the clicked element has the class 'remove-course'
        if (target.classList.contains('remove-course')) {
            e.preventDefault();

            const cartCourse = target.closest('.cart-course');

            if (cartCourse) {
                cartCourse.remove();

                if (document.querySelectorAll('.cart-course').length === 0 && emptyCartMessage) {
                    emptyCartMessage.classList.add('show');
                }
            } else {
                console.error("No cart course found to remove.");
            }
        }
    });

    const cartCourses = document.querySelectorAll('.cart-course');
    if (cartCourses.length === 0 && emptyCartMessage) {
        emptyCartMessage.classList.add('show');
    }
});
