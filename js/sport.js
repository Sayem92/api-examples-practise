                //Q-8 done

const loadPlayer = ()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny')
    .then(res => res.json())
    .then(data => displayPlayer(data.player));    
}

const displayPlayer = (players)=>{
    // console.log(players)
    players.forEach(player => {
        // console.log(player)
        const sportContainer = document.getElementById('sports-container')
    // sportContainer.innerHTML = '';
    const div = document.createElement('div')
    div.classList.add('player')
    div.innerHTML = `
    <img src="${player.strThumb}">
    <h4>Name : ${player.strPlayer}</h4>
    <p>IdPlayer : ${player.idPlayer} </p>
    <p>Nationality: ${player.strNationality}</p>
    <button onclick="detailsplayer(${player.idPlayer})">Details</button>
    `;
    sportContainer.appendChild(div)

    });
}

const detailsplayer = (idPlayer)=>{
    console.log(idPlayer)
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`)
    .then(res => res.json())
    .then(data => displayPlayerDetails(data.players[0])); 
}

const displayPlayerDetails = (detail)=>{
    const detailContainer = document.getElementById('detail-container')
    detailContainer.innerHTML = '';
    const div = document.createElement('div')
    div.classList.add('detail')
    div.innerHTML = `
    <img src="${detail.strThumb}">
    <h4>Name : ${detail.strPlayer}</h4>
    <p>Description : ${detail.strDescriptionEN} </p>
    `;
    detailContainer.appendChild(div)
}

loadPlayer()