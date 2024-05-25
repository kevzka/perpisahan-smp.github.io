const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            console.log('observe success');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('teksshow');
            entry.target.classList.remove('tekshide');
            console.log('observe teks success');
        }
    });
}, observerOptions);

const hiddenElements2 = document.querySelectorAll('.tekshide');
hiddenElements2.forEach((el) => observer2.observe(el));