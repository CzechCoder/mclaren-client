import BuildIcon from "@mui/icons-material/Build";

type CardProps = {
  model: string;
  paint: string;
  inService: boolean;
};

const CarCard = (props: CardProps) => {
  const carName = props.model.replace(/\s/g, "");
  const imgUrl = `http://tomasburian.com/dev/rea_09mclaren/static/media/cars/${carName}.webp`;
  return (
    <div className="car-container" key={1}>
      {props.inService && (
        <div className="overlay">
          <div className="inService">IN SERVICE</div>
        </div>
      )}
      <img src={imgUrl} alt="car" />
      <div className="car-name">
          <span>{props.model}</span>
      </div>
    </div>
  );
};

export default CarCard;
