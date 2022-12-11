const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setInterval(() => {
        animOnScroll();
    }, 2000);

    function remuveResiseStyles(image) {
        image.classList.remove('_onhower');
        image.classList.remove('_onout');
    }

    function animOnHover(image) {
        remuveResiseStyles(image)
        image.classList.add('_onhower');
    }

    function animOnOut(image) {
        remuveResiseStyles(image)
        image.classList.add('_onout');

    }
    for (let index = 0; index < animItems.length; index++) {
        let image = animItems[index]
        image.addEventListener("mouseover", () => animOnHover(image))
        image.addEventListener("mouseout", () => animOnOut(image))
    }
} 
