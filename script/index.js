function loadCategories() {
    // fetch 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    .then((res) => res.json())
    .then((data)=> displayCategories(data.categories))


}

function displayCategories(categories){
    
    // get the contaoner ?
    const categoriesContainer = document.getElementById("categories-container")

    // loop operator on arry ?
    for(let cat of categories){
        console.log(cat);

        // create Element ?
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm">${cat.category}</button>
        `;
        // append the element ?
        categoriesContainer.append(categoryDiv);
    }
}

loadCategories()