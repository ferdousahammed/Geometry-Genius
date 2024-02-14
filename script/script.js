console.log("connected");

const areaConstValue = {
  triangle: 0.5,
  rectangle: 1,
  parallelogram: 1,
  rhombus: 0.5,
  pentagon: 0.5,
  ellipse: 3.1416,
};

function changeCardColor(cardName) {
  switch (cardName) {
    case "triangle":
      return "bg-pink-50";
    case "rectangle":
      return "bg-sky-50";
    case "parallelogram":
      return "bg-fuchsia-50";
    case "rhombus":
      return "bg-green-50";
    case "pentagon":
      return "bg-lime-50";
    case "ellipse":
      return "bg-cyan-50";
  }
}

function toMeterSquare(area) {
  area = area / 10000;
  console.log(area);
  return area;
}

// const shapesContainer = document.getElementById('card-shapes')
const shapeCards = document.getElementsByClassName("card");
for (const card of shapeCards) {
  card.addEventListener("click", (e) => {
    const constVal =
      e.target.parentNode.parentNode.firstElementChild.innerText.toLowerCase();
    card.classList.add(changeCardColor(constVal));
    valueAB = e.target.parentNode.previousElementSibling.children;
    const a = valueAB[0].value;
    const b = valueAB[1].value;
    const area = areaConstValue[constVal] * a * b;
    const li = document.getElementById(constVal);
    li.removeAttribute("hidden");
    document.getElementById(constVal).innerHTML = `<div>${
      constVal[0].toUpperCase() + constVal.slice(1)
    }</div>
              <div class="flex gap-1">
                <div>${area}</div>
                <div>cm<sup>2</sup></div>
              </div>

              <button
                class="btn bg-sky-500 text-sm font-medium text-white px-2 h-2"
              >
                <div onclick='toMeterSquare(${area})'>Covert to m<sup>2</sup></div>
              </button>`;
  });
}
