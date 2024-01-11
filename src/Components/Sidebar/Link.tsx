import { sideTypes } from "../../types";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contextStore/GlobalContext";

type dataTypes = {
  data: sideTypes;
};

const Links = ({ data }: dataTypes) => {
  const { dispatch } = useGlobalContext();
  return (
    <ul className={`text-white  `}>
      <Link to={data.path} onClick={() => dispatch({ type: "openFalse" })}>
        <li className="hover:bg-violet-600 p-2">
          <b>{data.title}</b>
        </li>
      </Link>
    </ul>
  );
};

export default Links;
