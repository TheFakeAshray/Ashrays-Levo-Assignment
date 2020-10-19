import './style.scss';
import 'bootstrap';

function showMoreCards() {
  document.getElementById('moreCards').classList.remove('d-none');
  document.getElementById('showMoreCardsButton').classList.add('d-none');
}

window.showMoreCards = showMoreCards;
