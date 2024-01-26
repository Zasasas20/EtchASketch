let color = false;
let def = 64;
set(64);
updatePage();

function toRGBObject(rgbStr) {
    const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
    return { red, green, blue };
};

function toRGBString(rgbObj){
    return ("rgb(" + rgbObj.red + "," + rgbObj.green + "," + rgbObj.blue + ")");
}

function updatePage(){
    if (!color){
        document.querySelector("#Selected").remove();
    }
    else {
        let picker = document.createElement("input");
        picker.setAttribute("type", "color");
        picker.setAttribute("id", "Selected");

        document.querySelector(".footer").append(picker);
    }
    set(def);
}

function set(definition){
    document.querySelector(".containerHeaven").remove();
    document.documentElement.style.setProperty("--grid-percentage", ((100/definition) + "%"));

    let container = document.createElement("div");
    container.setAttribute("class", "containerHeaven");

    for (let i = 0; i < definition**2; i++){
        let box = document.createElement("div");
        box.setAttribute("class", "bockes");

        box.style.backgroundColor = "rgb(245, 245, 245)";

        box.addEventListener("mouseenter", (event) => {
            if (!color){
                let str = event.target.style.backgroundColor;
                let color = toRGBObject(str);
                color.red -= 25;
                color.green -= 25;
                color.blue -= 25;
                event.target.style = "background-color: " + toRGBString(color);
            }
            else{
                event.target.style.backgroundColor = document.querySelector("#Selected").value;
            }
        });
        container.append(box);
    }
    document.body.insertBefore(container, document.querySelector(".footer"));
}