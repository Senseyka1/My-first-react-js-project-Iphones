import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  return (
    <div className="loading">
      <ReactLoading type={type} color={color} height={"8%"} width={"8%"} />
    </div>
  );
};

export default Loading;
