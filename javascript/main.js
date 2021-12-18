const foodMenu = document.querySelectorAll('.food-menu button');
const foodList = document.querySelectorAll('.food-list .food-item');

foodMenu.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = e.target.getAttribute('type-food');

        document.querySelector('.food-menu button.active').classList.remove('active');
        e.target.classList.add('active');

        foodList.forEach(item => {
            console.log(type)
            if(type == 'all' || type == item.getAttribute('type-food')) {
                item.classList.remove('hide');
            } else item.classList.add('hide');
        })
    })
})