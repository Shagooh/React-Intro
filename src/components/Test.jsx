const Producto = ({title='Default', price='0', stock}) => {
  return (
    <>
      <p className={stock <= 0 ? 'sinStock' : null}>
        {title} - Precio: {price} <span>Stock: {stock} </span>
      </p>
    </>
  );
};

export default Producto;