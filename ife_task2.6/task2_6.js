(function () {
    var input = document.getElementById('aqi-input');
    var leftAdd = document.getElementById('left-add');
    var leftRemove = document.getElementById('left-remove');
    var rightAdd = document.getElementById('right-add');
    var rightRemove = document.getElementById('right-remove');
    var data = document.getElementById('aqi-text');
    var queue = document.getElementById('aqi-display');
    var item = document.getElementById('item');
    var search = document.getElementById('search');

    var createDiv = function (val) {
        let element = document.createElement('div');
        element.innerText = val;
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

    var processData = function () {
        let re = /[,，、\s]/;
        var dataArr = data.value.split(re);
        return dataArr;
    };

    
    var leftIn = function () {
        let arr = processData();
        for (let i=0; i<arr.length; i++) {
            let element = createDiv(arr[i]);
            queue.insertBefore(element, queue.childNodes[0]);
        }
        input.value = "";
    };
    leftAdd.addEventListener('click', leftIn, false);

    
    var rightIn = function () {
        let arr = processData();
        for (let i=0; i<arr.length; i++) {
            let element = createDiv(arr[i]);
            queue.appendChild(element);
        }
        input.value = "";
    };
    rightAdd.addEventListener('click', rightIn, false);

    var leftOut = function () {
        var removeElement = queue.removeChild(queue.firstChild);
        input.value = removeElement.innerText;
        alert(input.value);
    };
    leftRemove.addEventListener('click', leftOut, false);
    
    var rightOut = function () {
        var removeElement = queue.removeChild(queue.lastChild);
        input.value = removeElement.innerText;
        alert(input.value);
    };
    rightRemove.addEventListener('click', rightOut, false);

    var searchItem = function () {
        let re = new RegExp(item.value);
        for (let i=0; i<queue.childNodes.length; i++) {
            if (re.test(queue.childNodes[i].innerText)) {
                queue.childNodes[i].style.color = 'blue';
            }
        }
    };
    search.addEventListener('click', searchItem, false);
}) ();