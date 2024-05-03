function setLanguage(lang) {
    if (lang === 'ru') {
        document.getElementById('hello-text').innerText = 'Добро пожаловать!';
        document.getElementById('text-text').innerText = 'Для заказа междугородней поездки, пожалуйста, заполните форму ниже:';
        document.getElementById('from-label').innerText = 'Откуда:';
        document.getElementById('address1-label').innerText = 'Адрес:';
        document.getElementById('to-label').innerText = 'Куда:';
        document.getElementById('address2-label').innerText = 'Адрес:';
        document.getElementById('passengers-label').innerText = 'Количество пассажиров:';
        document.getElementById('luggage-label').innerText = 'Багаж:';
        document.getElementById('phone-label').innerText = 'Телефон номер:';
        document.getElementById('date-label').innerText = 'Дата:';
        document.getElementById('time-label').innerText = 'Время:';
        document.getElementById('luggage').setAttribute('placeholder', 'Сумка');
    } else if (lang === 'kz') {
        document.getElementById('hello-text').innerText = 'Қош келдіңіз!';
        document.getElementById('text-text').innerText = 'Қалааралық сапарға тапсырыс беру үшін төмендегіні толтырыңыз:';
        document.getElementById('from-label').innerText = 'Қайдан:';
        document.getElementById('address1-label').innerText = 'Мекенжай:';
        document.getElementById('to-label').innerText = 'Қайда:';
        document.getElementById('address2-label').innerText = 'Мекенжай:';
        document.getElementById('passengers-label').innerText = 'Жолаушылар саны:';
        document.getElementById('luggage-label').innerText = 'Багаж:';
        document.getElementById('phone-label').innerText = 'Телефон нөмірі:';
        document.getElementById('date-label').innerText = 'Күні:';
        document.getElementById('time-label').innerText = 'Уақыт:';
        document.getElementById('luggage').setAttribute('placeholder', 'Сөмке');
    }
}