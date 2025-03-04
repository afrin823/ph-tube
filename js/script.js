
// fetch category
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(err => console.log(err))
}
// load category 
const displayCategory = (categories) => {
    const div = document.getElementById("category");

    categories.forEach(category => {
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = `${category.category}`
        div.append(button)
    })
}
// fetch video 
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}
// load videos 
const displayVideos = (videos) => {
    const container = document.getElementById("video");
    videos.forEach(video => {
        const card = document.createElement("div");
        card.classList = "card card-compact"
        card.innerHTML = `
  <figure class="h-[200px]">
    <img
    class="h-full w-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      
  </figure>
  <div class="px-1 py-6 flex gap-2">
  <div>
  <img class="w-10 h-10 object-cover rounded-full" src="${video.authors[0].profile_picture}">
  </div>
  <div>
 <div class="flex gap-2 items-center"> 
 <h2>${video.authors[0].profile_name}</h2>
    ${video.authors[0].verified == true ? ` <img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png">` : ""}
    
 </div>
  </div>
  </div>
        `
        container.append(card)
    })
}
loadVideos()
loadCategory()