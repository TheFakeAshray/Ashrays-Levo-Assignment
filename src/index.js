import './style.scss';
import 'bootstrap';

function showMoreCards() {
  document.getElementById('moreCards').classList.remove('d-none');
}

window.showMoreCards = showMoreCards;
