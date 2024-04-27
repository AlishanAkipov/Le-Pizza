const wrapper = document.querySelector(".wrapper");
const idinput = document.querySelector("#idinput");
const imagelinkinput = document.querySelector("#imagelinkinput");
const titleinput = document.querySelector("#titleinput");
const overviewinput = document.querySelector("#overviewinput");
const realseinput = document.querySelector("#realseinput");
const genresinput = document.querySelector("#genresinput")
const btn1 = document.querySelector("#submit");
const genresselector = document.querySelector("#genress")

function wrap(films) {
    for (let index = 0; index < films.length; index++) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${films[index].poster}" alt="#">
            <div class="card_body">
                <p>${films[index].id}</p>
                <h4>${films[index].title}</h4>
                <h6>${films[index].overview}</h6>
                <p>${films[index].release_date}
                <p>${films[index].genres}
            </div>
`;

        wrapper.appendChild(card);
    }
}
wrap(films);

let input = document.querySelector("#input")

input.addEventListener("input", (e) => {
    e.preventDefault();
    wrapper.innerHTML = "";
    let searchdata = [];
    let value = input.value;

    films.forEach((e) => {
        if (e.title == value) {
            searchdata.push(e);
        }

    });
    for (let index = 0; index < searchdata.length; index++) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
    <img src="${searchdata[index].poster}">
    <div class="card_body">
    <p>${searchdata[index].id}</p>
    <h4>${searchdata[index].title}</h4>
    <h6>${searchdata[index].overview}</h6>
    <p>${searchdata[index].release_date}</p>
    <p>${searchdata[index].genres}</p>
</div>
`;

        wrapper.appendChild(card);
    }
});


btn1.addEventListener("click", () => {

    wrapper.innerHTML = "";

    films.unshift({

        id: idinput.value,
        title: titleinput.value,
        poster: imagelinkinput.value,
        overview: overviewinput.value,
        release_date: realseinput.value,
        genres: genresinput.value
    })

    wrap(films);


});


genresselector.addEventListener("change", function () {
    let filmler = films.genres;
    for (let index = 0; index < films.length; index++)
        if (films.genres == Option.value) {
            wrapper.push = "";
        }

}
)
