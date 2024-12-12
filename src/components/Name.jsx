// components/Name.js
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../redux/userSlice";

export const Name = () => {
 const dispatch = useDispatch();
 const name = useSelector((state) => state.user.name);

 const handleChange = (e) => {
  dispatch(changeName(e.target.value));
 };

 return (
  <input type="text" value={name} placeholder="Name" onChange={handleChange} />
 );
};
