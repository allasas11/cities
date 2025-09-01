
const addCityButton = document.querySelector('#add-city-button');

addCityButton.addEventListener('click', async () => {
    const newCity = {
        image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        city: 'Laris',
        price: 1200,
        description: 'Beautiful city'
    };

    console.log(newCity);

    try {
        const res = await fetch('http://localhost:3000/api/cities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCity)
        });
        const data = await res.json();
        console.log('City added successfully:', data);
    } catch (error) {
        console.error('Failed to add city:', error);
    }
});