document.addEventListener('DOMContentLoaded', function () {
    const phoneOption = document.getElementById('phoneOption');
    const laptopOption = document.getElementById('laptopOption');


    // From import
    // function handlePhoneSelect() {
    //     console.log('Phone selected');
    //     // Add your phone selection logic here
    //     // For example: redirect to phone-specific page or store preference
    //     alert('Phone selected! Redirecting to mobile experience...');
    // }

    // Mine
    function handlePhoneSelect() {
        console.log('Phone selected');
        window.location.href = 'https://www.figma.com/proto/WqGYXISmxJYEhSbZOMMuBY/Portfolio?page-id=33%3A63&node-id=33-70&p=f&viewport=461%2C25%2C0.07&t=E1gXA9ET1sKrWlv2-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=33%3A70';  // Replace with phone URL
    }


    // From export
    // function handleLaptopSelect() {
    //     console.log('Laptop selected');
    //     // Add your laptop selection logic here
    //     // For example: redirect to desktop-specific page or store preference
    //     alert('Laptop selected! Redirecting to desktop experience...');
    // }

    // Mine
    function handleLaptopSelect() {
        console.log('Laptop selected');
        window.location.href = 'https://www.figma.com/proto/WqGYXISmxJYEhSbZOMMuBY/Portfolio?page-id=0%3A1&node-id=1-1786&p=f&viewport=437%2C25%2C0.07&t=pW4D8Z3aiPbaJMTp-1&scaling=min-zoom&content-scaling=fixed';  // Replace with laptop URL
    }

    // Add event listeners
    phoneOption.addEventListener('click', handlePhoneSelect);
    laptopOption.addEventListener('click', handleLaptopSelect);

    // Add keyboard support
    phoneOption.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handlePhoneSelect();
        }
    });

    laptopOption.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleLaptopSelect();
        }
    });
});
