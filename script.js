
document.addEventListener("DOMContentLoaded", function() {
    const mapObject = document.getElementById("us-map");

    mapObject.addEventListener("load", function() {
        const svgDoc = mapObject.contentDocument;

        // Highlight counties in Maryland and Delaware
        const highlightStates = ['MD', 'DE'];
        highlightStates.forEach(state => {
            const counties = svgDoc.querySelectorAll(`[id^="${state}"]`);
            counties.forEach(county => {
                county.style.fill = "#FFCCCB"; // Light red fill
            });
        });

        // Label Baltimore City
        const baltimore = svgDoc.getElementById("MD510"); // FIPS code for Baltimore city
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
});
