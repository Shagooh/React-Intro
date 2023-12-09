import Card from 'react-bootstrap/Card';
import Tags from './Tags.jsx'

const MyCard = ({image, title, description, text, backColor}) => {
    return (
    <>
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {description}
        <Tags  backColor={backColor} text={text}></Tags>
      </Card.Body>
    </Card>
    </>
    )

}
export default MyCard;