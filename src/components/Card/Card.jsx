import { useNavigate } from 'react-router-dom'
import './Card.css'

export default function Card({ to, title, text, children }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(to)} className="card">
      <h3 className="card-title">{title}</h3>
       {children}
      <p className="card-text">{text}</p>
    </div>
  );
}