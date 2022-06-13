import './Deserts.css';
import 'react-router';
import { useParams } from 'react-router-dom';

function DesertsItem() {
  const params = useParams();
  const desertId = params.desertsId;
  return (
    <div className="main_content">
      <p>desertId: {desertId}</p>
    </div>
    
  );
}

export default DesertsItem;
