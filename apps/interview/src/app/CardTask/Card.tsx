import './styles.css';
import { FC } from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  liked: boolean;
}

const Card: FC<CardProps> = ({ imageSrc, title, liked }) => (
  <div className="card">
    <img className="card-media" src={imageSrc} height="200" alt={title} />
    <div className="card-content">
      <div className="card-title">{title}</div>
      <i className="card-status">Do you like it? <strong>{liked ? 'yes' : 'no'}</strong></i>
    </div>
    <div className="card-actions">
    </div>
  </div>
);

export default Card;
