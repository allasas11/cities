

const addCityButton = document.querySelector('#add-city-button');
const citiesList = document.getElementById('cities-list');

// Fetch and display all cities
async function fetchCities() {
    try {
        const res = await fetch('http://localhost:3000/api/cities');
        const cities = await res.json();
        renderCities(cities);
    } catch (error) {
        citiesList.innerHTML = '<p>Failed to load cities.</p>';
    }
}

function renderCities(cities) {
    if (!cities.length) {
        citiesList.innerHTML = '<p>No cities found.</p>';
        return;
    }
    citiesList.innerHTML = cities.map(city => `
        <div class="city-item" data-id="${city._id}">
            <img src="${city.image}" alt="${city.city}" width="100" />
            <strong>${city.city}</strong> - $${city.price}<br />
            <span>${city.description}</span><br />
            <button class="delete-city">Delete</button>
        </div>
    `).join('');
}

// Add city event
addCityButton.addEventListener('click', async () => {
    const newCity = {
        image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        city: 'Laris',
        price: 2500,
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

// Delete city event (event delegation)
citiesList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete-city')) {
        const cityDiv = e.target.closest('.city-item');
        const cityId = cityDiv.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this city?')) {
            try {
                const res = await fetch(`http://localhost:3000/api/cities/${cityId}`, {
                    method: 'DELETE'
                });
                const result = await res.json();
                if (res.ok) {
                    cityDiv.remove();
                    console.log('City deleted:', result);
                } else {
                    alert(result.error || 'Failed to delete city.');
                }
            } catch (error) {
                alert('Failed to delete city.');
            }
        }
    }
});

// Initial fetch
fetchCities();