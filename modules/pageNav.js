// Displaying the navitems individually

class Navpage {
  constructor() {
    const mainLink = document.getElementById('Main-Link');
    const addLink = document.getElementById('Add-Page-Link');
    const contactLink = document.getElementById('Contact_Link');

    const awesomeBooks = document.querySelector('.books-content-top');
    const contactPage = document.querySelector('.contact-container');
    const formPage = document.querySelector('.form-container');

    mainLink.addEventListener('click', () => {
      mainLink.classList.toggle('clicked');
      contactLink.classList.remove('clicked3');
      addLink.classList.remove('clicked2');
      formPage.classList.add('less');
      formPage.classList.remove('remove');
      contactPage.classList.remove('add');
      awesomeBooks.classList.add('more');
    });

    addLink.addEventListener('click', () => {
      addLink.classList.toggle('clicked2');
      mainLink.classList.remove('clicked');
      contactLink.classList.remove('clicked3');
      awesomeBooks.classList.remove('more');
      contactPage.classList.remove('add');
      formPage.classList.remove('less', 'remove');
    });

    contactLink.addEventListener('click', () => {
      addLink.classList.remove('clicked2');
      contactLink.classList.toggle('clicked3');
      mainLink.classList.remove('clicked');
      awesomeBooks.classList.remove('more');
      contactPage.classList.add('add');
      formPage.classList.add('remove');
    });
  }
}

export default Navpage;
