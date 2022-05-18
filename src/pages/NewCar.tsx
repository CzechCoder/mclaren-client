import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerCar, reset } from "../features/cars/carSlice";
import Spinner from "../components/Spinner";

const NewCar = () => {

  const { user } = useAppSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.cars
  );
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  // car details from the form
  const [model, setModel] = useState("");
  const [paint, setPaint] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/mycars");
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // dispatch(registerCar({model, paint}))
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        className="respCont"
        style={{ backgroundColor: "pink" }}
      >
        <section className="heading">
          <h1>Register a new car</h1>
          <p>Please fill out the form below</p>
        </section>
        <section className="form">
          <div className="form-group">
            <label htmlFor="name">Customer Name</label>
            <input type="text" className="form-control" value={name} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="email">Customer Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              disabled
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <select
                name="car"
                id="car"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="765LT Spider">765LT Spider</option>
                <option value="720S Spider">720S Spider</option>
                <option value="Artura">Artura</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="paint">Paint</label>
              <textarea
                name="paint"
                id="paint"
                className="form-control"
                placeholder="Paint"
                value={paint}
                onChange={(e) => setPaint(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default NewCar;
