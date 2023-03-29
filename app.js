const loadData = async() =>{
  const url =`https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data.tools);
}

const displayData = tools =>{
// console.log(tools);
const toolsContainer = document.getElementById('tools-container');
tools = tools.slice(0,6);
tools.forEach(tool =>{
  console.log(tool);
  const toolDiv = document.createElement('div');
  toolDiv.classList.add('col');
  toolDiv.innerHTML=`
  <div class="card h-100">
    <img src="${tool.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${tool.name}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  `
toolsContainer.appendChild(toolDiv);
})

}


loadData();