import Button from "react-bootstrap/Button";

const Boton = ({colorButton, description}) => {
    return (

        <Button variant={colorButton} > {description} </Button>

    )
}

export default Boton;