const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const formsFieldset = form.querySelectorAll('fieldset');
const interactiveElementsOfMapForm = Array.from(mapFiltersForm.children);

const formDisabling = (formName) => {
  if(formName.classList.contains('ad-form--disabled')){
    formName.classList.remove('ad-form--disabled');
  } else {
    formName.classList.add('ad-form--disabled');
  }
}

const interactiveElementsDisabled = (interactiveElements) => {
  interactiveElements.forEach((value) => {
    if(value.hasAttribute('disabled', 'disabled')) {
      value.removeAttribute('disabled', 'disabled');
    } else {
      value.setAttribute('disabled', 'disabled');
    }
  });
}

const disablendingElemenets = () => {
  formDisabling(form);
  formDisabling(mapFiltersForm);
  interactiveElementsDisabled(formsFieldset);
  interactiveElementsDisabled(interactiveElementsOfMapForm);
};

window.onload = () => {
  disablendingElemenets();
};

export {disablendingElemenets};
