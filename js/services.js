(async function(){
    const response = await fetch('api/services.json');
    const services = await response.json();

    function renderServices(services) {
        const servicesContainer = document.querySelector('.services__cards');
        // servicesContainer.innerHTML = "";
        for (const service of services) {
            servicesContainer.innerHTML += `
            <div class="services__card__item">
                <img class="services__card__image" src="${service.img}" alt="$(service.title}" class="services__card-image">
                <h3>${service.title}</h3>
                <p>${service.price}</p>
            </div>
            `
        }
    }
    renderServices(services);
})()