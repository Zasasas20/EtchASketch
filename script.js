set(64);

function set(definition){
    document.querySelector(".containerHeaven").remove();
    document.documentElement.style.setProperty("--grid-percentage", ((100/definition) + "%"));

    let container = document.createElement("div");
    container.setAttribute("class", "containerHeaven");

    for (let i = 0; i < definition**2; i++){
        let box = document.createElement("div");
        box.setAttribute("class", "bockes");

        container.append(box);
    }
    document.body.insertBefore(container, document.querySelector(".footer"));
}