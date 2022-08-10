type ItemProps = {
    imgName: string;
    name: string;
    price: number;
}

const ItemCard = (props: ItemProps) => {
    const imgUrl = `http://tomasburian.com/dev/rea_09mclaren/static/media/shop/${props.imgName}.webp`;
  return (
    <div className="item-container" key={1}>
      <img className="item-img" src={imgUrl} alt="item" />
      <div className="item-name">
          <span>{props.name}</span>       
      </div>
      <div className="item-price">
          <span>{props.price}</span>       
      </div>
    </div>
  )
}

export default ItemCard
