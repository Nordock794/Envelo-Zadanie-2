console.time("timer");


const elements = {
    getPackage: document.querySelector('.start button'),
    validateData: document.querySelector('.validate button'),
    packageGetted: document.querySelector('.finish button:nth-of-type(1)'),
    getNextPackage: document.querySelector('.finish button:nth-of-type(2)'),
    view: {
        start: document.querySelector('.start'),
        validate: document.querySelector('.validate'),
        finish: document.querySelector('.finish'),
        firstStep: document.querySelector('.steps .first-step'),
        secondStep: document.querySelector('.steps .second-step'),
        thirdStep: document.querySelector('.steps .third-step'),
    },
    inputField: {
        telNumber: document.querySelector('.validate input:nth-of-type(1)'),
        packageId: document.querySelector('.validate input:nth-of-type(2)'),
    },
    timeCount: document.querySelector('.finish .modal .content span'),
};

const validationData = {
    telNumber: 793793793,
    packageId: 2022,
};

let timeCount = 0;

function timeCounter() {
    timeCount++
}

function startTimer() {
    interval = setInterval(timeCounter, 1000);
}
function stopTimer() {
    clearInterval(interval);
}

const getPackageFn = () => {
    elements.view.start.classList.add('inactive');
    elements.view.validate.classList.remove('inactive');
    elements.view.firstStep.classList.remove('active-step');
    elements.view.secondStep.classList.add('active-step');
    startTimer();
};

const validateDataFn = () => {
    const textElement = document.querySelector('.validate .content input+p');

    if (elements.inputField.telNumber.value.length < 9 && elements.inputField.packageId.value.length < 4) {
        textElement.innerHTML = 'Wypełnij powyższe pola';

    } else if (elements.inputField.telNumber.value.length < validationData.telNumber.toString().length && elements.inputField.packageId.value.length == validationData.packageId.toString().length) {
        textElement.innerHTML = 'Wypełnij pole z numerem telefonu';
    }
    else if (elements.inputField.telNumber.value.length == validationData.telNumber.toString().length && elements.inputField.packageId.value.length < validationData.packageId.toString().length) {
        textElement.innerHTML = 'Wypełnij pole z kodem odbioru';
    }
    else {
        if (elements.inputField.telNumber.value == validationData.telNumber && elements.inputField.packageId.value == validationData.packageId) {
            elements.view.finish.classList.remove('inactive');
            elements.view.secondStep.classList.remove('active-step');
            elements.view.thirdStep.classList.add('active-step');
            elements.inputField.telNumber.value = '';
            elements.inputField.packageId.value = '';
            textElement.innerHTML = '';
            stopTimer();
            elements.timeCount.innerHTML = timeCount;
        } else {
            textElement.innerHTML = `Niepoprawny numer telefonu lub kod odbioru.`;
        };
    }
};

const packageGettedfn = () => {
    elements.view.start.classList.remove('inactive');
    elements.view.validate.classList.add('inactive');
    elements.view.finish.classList.add('inactive');
    elements.view.thirdStep.classList.remove('active-step');
    elements.view.firstStep.classList.add('active-step');
    timeCount = 0;
};

const getNextPackagefn = () => {
    elements.view.start.classList.add('inactive');
    elements.view.validate.classList.remove('inactive');
    elements.view.finish.classList.add('inactive');
    elements.view.thirdStep.classList.remove('active-step');
    elements.view.firstStep.classList.add('active-step');
    timeCount = 0;
    startTimer();
};

elements.getPackage.addEventListener('click', getPackageFn);
elements.validateData.addEventListener('click', validateDataFn);
elements.packageGetted.addEventListener('click', packageGettedfn);
elements.getNextPackage.addEventListener('click', getNextPackagefn);

console.timeEnd("timer");