import "./Featured.css";

const Featured = () => {
  return (
    <div className="Types">
      <h1>Select Based on Type</h1>
      <hr className="h"></hr>
      <div className="container">
        <div className="bg1">
            <h2>Resorts</h2>
        </div>
        <div className="bg2">
            <h2>Hotels</h2>
        </div>
        <div className="bg3">
            <h2>Villas</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;