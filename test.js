const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'SWIFT', 'MONGOOSE', 'REACT',
    'PYTHON', 'SASS',
    'DJANGO', 'NODEJS', 'MONGODB',
    'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA'
];

var tagCloud = TagCloud('.Sphere', Texts, {
    radius: 300,
    maxSpeed: 'normal',
    initSpeed: 'slow',
    direction: 135,
    keep: true,
    useHTML: true

});

// Giving color to each text in sphere
var color = '#19C2C8';
document.querySelector('.Sphere').style.color = color;