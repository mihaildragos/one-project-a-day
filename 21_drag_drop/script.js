window.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const elements = document.querySelectorAll(".drag-item");
    const dropZones = document.querySelectorAll('.drop-zone')

    // Add the ondragstart event listener
    elements.forEach(element => {
        element.draggable = true;
        element.addEventListener("dragstart", dragStartHandler)
        element.addEventListener("dragend", dragEndHandler)
    })
    
    dropZones.forEach(zone => {
        zone.addEventListener("dragenter", dragEnterHandler);
        zone.addEventListener("dragover", dragOverHandler)
        zone.addEventListener("dragleave", dragLeaveHandler);
        zone.addEventListener("drop", dropHandler);


    })
});


function dragStartHandler(ev) {
    console.log('dragStartHandler');
    // ev.preventDefault();
    // ev.dataTransfer.setData("text/html", ev.target.id);
    // ev.dataTransfer.effectAllowed = "move";
}

function dragEndHandler(ev) {
    console.log('dragEndHandler');
    // ev.preventDefault();

}

function dragOverHandler(ev) {
    console.log('dragOverHandler');
    // ev.preventDefault();
    // ev.dataTransfer.dropEffect = "move";
}

function dragEnterHandler(ev) {
    console.log('dragEnterHandler');
    // ev.preventDefault();
    // ev.dataTransfer.dropEffect = "move";
}

function dragLeaveHandler(ev) {
    console.log('dragLeaveHandler');
    // ev.preventDefault();
    // ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    console.error('dropHandler');
    // ev.preventDefault();
    // // Get the id of the target and add the moved element to the target's DOM
    // const data = ev.dataTransfer.getData("text/html");
    // ev.target.appendChild(document.getElementById(data));
}

