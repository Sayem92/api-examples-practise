const loadRandom = (search) => {
    fetch(`https://randomuser.me/api/?gender=${search}`)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]));

}
                                                    // Q-6
const displayUser = (data) => {                                     
    // console.log(data)                                                    
    const listContainer = document.getElementById('list-container')
    listContainer.innerHTML = '';
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <img src="${data.picture.large}">
    <h6>Location :-</h6>
    <p>Street : ${data.location.street.number} , ${data.location.street.name}</p>
    <p>City: ${data.location.city}</p>
     <p>Coordinates : ${data.location.coordinates.latitude} , ${data.location.coordinates.longitude}</p>   
    <p>Timezone : ${data.location.timezone.offset} , ${data.location.timezone.description}</p>
    `;
    listContainer.appendChild(div)
}

loadRandom('male')