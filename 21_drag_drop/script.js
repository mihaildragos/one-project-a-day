window.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const elements = document.querySelectorAll(".drag-item");
    const dropZones = document.querySelectorAll('.drop-zone')

    // Add the ondragstart event listener
    elements.forEach((element, i) => {
        element.draggable = true;
        element.dataset.value = i;
        element.addEventListener("dragstart", dragStartHandler)
        element.addEventListener("dragend", dragEndHandler)
    })

    dropZones.forEach(zone => {
        zone.addEventListener("dragenter", dragEnterHandler);
        zone.addEventListener("dragover", dragOverHandler);
        zone.addEventListener("dragleave", dragLeaveHandler);
        zone.addEventListener("drop", dropHandler);
    })



    function dragStartHandler(ev) {
        this.classList.toggle('hold');
        setTimeout(() => {
            this.classList.toggle('hold');
        }, 0);

        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData('text', this.attributes['data-value'].value);
        ev.dataTransfer.effectAllowed = "move";
    }

    function dragEndHandler(ev) {
        ev.preventDefault();
    }

    function dragOverHandler(ev) {
        ev.preventDefault();
    }

    function dragEnterHandler(ev) {
        ev.preventDefault();
        this.classList.add('hovered');
        // this.dataTransfer.dropEffect = "move";
    }
    
    function dragLeaveHandler(ev) {
        this.classList.remove('hovered');
        // this.dataTransfer.dropEffect = "move";
    }

    function dropHandler(ev) {
        ev.preventDefault();
        if (this.classList.contains('drop-zone')) {
            this.append(elements[ev.dataTransfer.getData("text")]);
        }
    }
});
