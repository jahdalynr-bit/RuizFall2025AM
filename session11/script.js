function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('fruit1'));
dragElement(document.getElementById('fruit2'));
dragElement(document.getElementById('fruit3'));
dragElement(document.getElementById('fruit4'));
dragElement(document.getElementById('fruit5'));
dragElement(document.getElementById('fruit6'));
dragElement(document.getElementById('fruit7'));
dragElement(document.getElementById('fruit8'));
dragElement(document.getElementById('fruit9'));
dragElement(document.getElementById('fruit10'));
dragElement(document.getElementById('fruit11'));
dragElement(document.getElementById('fruit12'));
dragElement(document.getElementById('fruit13'));
dragElement(document.getElementById('fruit14'));