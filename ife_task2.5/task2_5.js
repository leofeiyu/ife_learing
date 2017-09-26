(function () {
    var input = document.getElementById('input-element');
    var leftIn = document.getElementById('left-in');
    var leftOut = document.getElementById('left-out');
    var rightIn = document.getElementById('right-in');
    var rightOut = document.getElementById('right-out');
    var queue = document.getElementById('queue-display');
    var sort = document.getElementById('sort');
    // 创建一个数组，用来存放当前数据
    var arr = [];

    var createDiv = function () {
        if (arr.length > 60) {
            alert('数据溢出，请勿输入！');
            return;
        }
        if (input.value < 10 || input.value > 100) {
            alert('请输入10-100范围内的数字！');
        } else {
            let element = document.createElement('div');
            element.style.height = `${input.value}px`;
            element.style.width = '20px';
            element.style.display = 'inline-block';
            element.style.margin = '2px';
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
            element.addEventListener('click', deleteElement, false);
            return element;
        }
    };
    var deleteElement = function () {
        // 实际编程中，监听函数内部的this对象，常常需要指向触发事件的那个Element节点。
        // addEventListener方法指定的监听函数，内部的this对象总是指向触发事件的那个节点。
        for (let i=0; i<arr.length; i++) {
            let len = this.style.height.length;
            if (arr[i] === parseInt(this.style.height)) {
                // 当找到数组里该值时，从数组中删除此元素。这里请区分delete与splice的差别。delete不会改变数组长度。
                arr.splice(i, 1);
                break;
            }
        }
        alert('删除的值：' + parseInt(this.style.height) + ' 数组长度：'+ arr.length);
        queue.removeChild(this);
    };

    var leftAdd = function () {
        let element = createDiv();
        queue.insertBefore(element, queue.childNodes[0]);
        arr.unshift(input.value);
        input.value = "";
    };
    leftIn.addEventListener('click', leftAdd, false);

    var rightAdd = function () {
        let element = createDiv();
        queue.appendChild(element);
        arr.push(input.value);
        input.value = "";
    };
    rightIn.addEventListener('click', rightAdd, false);

    var leftRemove = function () {
        var removeElement = queue.removeChild(queue.firstChild);
        input.value = parseInt(removeElement.style.height);
        arr.shift(input.value);
        alert('删除的值：' + input.value + ' 数组长度：'+ arr.length);
    };
    leftOut.addEventListener('click', leftRemove, false);

    var rightRemove = function () {
        var removeElement = queue.removeChild(queue.lastChild);
        input.value = parseInt(removeElement.style.height);
        arr.pop(input.value);
        alert('删除的值：' + input.value + ' 数组长度：'+ arr.length);
    };
    rightOut.addEventListener('click', rightRemove, false);

    var bubbleSort = function () {
        var divArr = queue.childNodes;
        for (let i=0; i<divArr.length; i++) {
            for (let j=0; j<divArr.length-1;j++) {
                if (parseInt(divArr[j].style.height) < parseInt(divArr[j+1].style.height)) {
                    queue.insertBefore(divArr[j+1], divArr[j]);
                }
            }
        }
    };
    sort.addEventListener('click', bubbleSort, false);
})();