var USER_COLOR = '';

function textColor(color) {
    var choice_color = ''
    maintain(color);
    if (color === 'white') {
        choice_color = 'white';
    } else if (color === 'yellow') {
        choice_color = 'yellow';
    } else {
        choice_color = 'orange';
    }

    USER_COLOR = choice_color;
};

function maintain(color) {
    var obj = document.querySelector('.' + color);
    obj.addEventListener('click', function () {
        if (color === 'white') {
            var other1 = document.querySelector('.yellow');
            var other2 = document.querySelector('.orange');
            other1.style.background = '';
            other1.style.color = '';
            other2.style.background = '';
            other2.style.color = '';
        } else if (color === 'yellow') {
            var other1 = document.querySelector('.white');
            var other2 = document.querySelector('.orange');
            other1.style.background = '';
            other1.style.color = '';
            other2.style.background = '';
            other2.style.color = '';
        } else {
            var other1 = document.querySelector('.white');
            var other2 = document.querySelector('.yellow');
            other1.style.background = '';
            other1.style.color = '';
            other2.style.background = '';
            other2.style.color = '';
        }
        obj.style.background = color;
        obj.style.color = 'black';
    });
}