import "../styles/productCardStyle.css";
import Card from 'react-bootstrap/Card';
import { handleLongText } from "../utils/helper";

function BasicExample({productData}) {
  return (
    <Card className=' bg-white card-hover me-5 bg-danger ' style={{ width: '17rem' }} 
    >
      <Card.Img className='img-fluid object-fit-cover' style={{height: "200px"}} variant="top" src={productData.images[0]}
          onError={({currentTarget})=>{
            currentTarget.onerror = null 
            currentTarget.src = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }}
      />
      <Card.Body>
         <p className="title-font"> {handleLongText(productData.title,25)}</p>
        <h5  className="text-danger fw-bold">${productData.price}</h5>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;