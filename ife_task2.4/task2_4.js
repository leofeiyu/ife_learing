(function () {
    var input = document.getElementById('input-element');
    var leftIn = document.getElementById('left-in');
    var leftOut = document.getElementById('left-out');
    var rightIn = document.getElementById('right-in');
    var rightOut = document.getElementById('right-out');
    var queue = document.getElementById('queue-display');

    var createDiv = function () {
        let element = document.createElement('div');
        element.innerText = input.value;
        element.style.display = 'inline';
        element.style.margin = '2px';
        element.style.backgroundColor = 'red';
        element.style.color = 'white';
        element.addEventListener('click', deleteElement, false);
        return element;
    };
    var deleteElement = function () {
        // 实际编程中，监听函数内部的this对象，常常需要指向触发事件的那个Element节点。
        // addEventListener方法指定的监听函数，内部的this对象总是指向触发事件的那个节点。
        queue.removeChild(this);
    };

    var leftAdd = function () {
        let element = createDiv();
        queue.insertBefore(element, queue.childNodes[0]);
        input.value = "";
    };
    leftIn.addEventListener('click', leftAdd, false);

    var rightAdd = function () {
        let element = createDiv();
        queue.appendChild(element);
        input.value = "";
    };
    rightIn.addEventListener('click', rightAdd, false);

    var leftRemove = function () {
        var removeElement = queue.removeChild(queue.firstChild);
        input.value = removeElement.innerText;
        alert(input.value);
    };
    leftOut.addEventListener('click', leftRemove, false);

    var rightRemove = function () {
        var removeElement = queue.removeChild(queue.lastChild);
        input.value = removeElement.innerText;
        alert(input.value);
    };
    rightOut.addEventListener('click', rightRemove, false);
})();