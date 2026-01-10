

const addCityButton = document.querySelector('#add-city-button');
const citiesList = document.getElementById('cities-list-container');

async function fetchCities() {
    while (citiesList.firstChild) {
        citiesList.removeChild(citiesList.firstChild);
    }

    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton';
        citiesList.appendChild(skeleton);
    }

    try {
        const res = await fetch('http://localhost:3000/api/cities');
        const cities = await res.json();
        renderCities(cities);
        closeSkeletons();
    } catch (error) {

        while (citiesList.firstChild) {
            citiesList.removeChild(citiesList.firstChild);
        }
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Failed to load cities.';
        citiesList.appendChild(errorMsg);
    }
    
}

function closeSkeletons() {
    const skeletons = document.querySelectorAll('.skeleton');
    skeletons.forEach((skeleton) => {
        skeleton.remove();
    });
}

function renderCities(cities) {
  const citiesListContainer = document.getElementById('cities-list-container');
  const citiesList = document.createElement('ul');
  citiesList.className = 'cities-list';

  if (!cities.length) {
    const noCitiesMsg = document.createElement('p');
    noCitiesMsg.textContent = 'No cities found.';
    citiesList.appendChild(noCitiesMsg);
    citiesListContainer.appendChild(citiesList);
    return;
  }

  cities.forEach(city => {
    const cityItem = document.createElement('li');
    cityItem.className = 'city-item';
    cityItem.setAttribute('data-id', city._id);

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const img = document.createElement('img'); 
    img.src = city.image;
    img.alt = city.city;
    imageContainer.appendChild(img);
    cityItem.appendChild(imageContainer);

    const strong = document.createElement('strong');
    strong.textContent = city.city;
    cityItem.appendChild(strong);
    cityItem.appendChild(document.createTextNode(` - $${city.price}`));

    const descSpan = document.createElement('span');
    descSpan.textContent = city.description;
    cityItem.appendChild(descSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-city';
    deleteBtn.textContent = 'Delete';
    cityItem.appendChild(deleteBtn);

    citiesList.appendChild(cityItem);
  });

  citiesListContainer.appendChild(citiesList);
}

addCityButton.addEventListener('click', async () => {
    const newCity = {
        image: 'https://images.pexels.com/photos/13033239/pexels-photo-13033239.jpeg',
        city: 'Kolkata',
        price: 3500,
        description: 'Gorgeous city with stunning views'
    };

    try {
        const res = await fetch('http://localhost:3000/api/cities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCity)
        });
        const data = await res.json();
        fetchCities();
    } catch (error) {
        console.error('Failed to add city:', error);
    }
});

citiesList.addEventListener('click', async (e) => {

    const isDeleteButton = e.target.classList.contains('delete-city');

    if (isDeleteButton) {
        const cityDiv = e.target.closest('.city-item');
        const cityId = cityDiv.getAttribute('data-id');

        const userConfirmed = confirm('Are you sure you want to delete this city?');
        if (!userConfirmed) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/api/cities/${cityId}`, {
                method: 'DELETE'
            });
            const result = await response.json();

            if (response.ok) {
                cityDiv.remove();
                console.log('City deleted:', result);
            } else {
                alert(result.error || 'Failed to delete city.');
            }
        } catch (error) {
            alert('Failed to delete city.');
        }
    }
});

fetchCities();


    