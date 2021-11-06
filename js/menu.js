//fetch - метод для работы с серверными запросами
const renderItems = (data) =>{
  console.log(data);
}

fetch(`./db/partners.json`)
.then((response) => response.json())
.then((data) => {
  renderItems(data);
})
.catch((error) => {
  console.log(error);
})