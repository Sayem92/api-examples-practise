
const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data));             //Q-1
}
//Q-2
const displayComment = (data)=>{
    const commentContainer = document.getElementById('list-comments')
    data.forEach(data => {                                                  //Q-4
        // console.log(data)
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
        <h1>Id : ${data.id}</h1>
        <p>Name : ${data.name.slice(0,15)}</p>
        <p>Email : ${data.email}</p>
        <button onclick="loadDetails(${data.postId})">Details</button>

        `;
        commentContainer.appendChild(div)
    });

}

                   //Q-5

const loadDetails = (postId) =>{
        // console.log(postId)
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        // console.log(url)

        fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data))

}

const displayDetail = (data)=>{
    // console.log(data)
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    data.forEach(data => {                                               
        //  console.log(data)
        const div = document.createElement('div')
        div.classList.add('detail')
        div.innerHTML = `
        <h1>Id : ${data.id}</h1>
        <p>Body : ${data.body.slice(0,150)}</p>
        <p>PostId : ${data.postId}</p>
        `;
        detailContainer.appendChild(div)
    });

}

 loadData()    // Q-3