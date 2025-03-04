
// fetch category
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(err => console.log(err))
}
const displayCategory = (categories) => {
    const div = document.getElementById("category");
    
    categories.forEach(category => {
        const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = `${category.category}`
    div.append(button)
    })
}
loadCategory()