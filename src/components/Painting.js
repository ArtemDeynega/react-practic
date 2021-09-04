import PropTypes from 'prop-types';
import defaultImg from '../defaultImg.jpg';

const Painting = ({
  imageUrl = defaultImg,
  title,
  autorName = 'не известен',
  profileUrl,
  price,
  quantity,
}) => (
  <div>
    <img src={imageUrl ?? defaultImg} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{autorName}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
    <button type="button">Добавить в корзину</button>
  </div>
);
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  autorName: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
