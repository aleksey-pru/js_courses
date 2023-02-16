let age = prompt('Введите ваш возраст');
switch (true) {
    case age > 18:
        alert('Мне больше 18')
        break;
    case age < 18:
        alert('Мне меньше 18')
        break;
    default:
        alert('Мне 18 лет')
}