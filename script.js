document.addEventListener("DOMContentLoaded", function () {
    const svg = document.querySelector("svg"); // SVG is inline now

    const highlightStates = ['MD', 'DE'];
    highlightStates.forEach(state => {
        const counties = svg.querySelectorAll(`[id^="${state}"]`);
        counties.forEach(county => {
            county.classList.add("highlight-county");
        });
    });

    const baltimore = svg.getElementById("MD510");
    if (baltimore) {
        const ns = "http://www.w3.org/2000/svg";
        const label = document.createElementNS(ns, "text");
        label.setAttribute("x", baltimore.getBBox().x + 10);
        label.setAttribute("y", baltimore.getBBox().y + 20);
        label.setAttribute("font-size", "10");
        label.setAttribute("fill", "black");
        label.textContent = "Baltimore FO AOR";
        baltimore.parentNode.appendChild(label);
    }
});
