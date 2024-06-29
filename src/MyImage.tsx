import myIcon from "./assets/myIcon.png";

const MyImage = () => {
  return (
    <>
      <div>
        <h4>インポートした画像</h4>
        <img src={myIcon} />
      </div>
      <div>
        <h4>srcに指定した画像</h4>
        <img src="src/assets/myIcon.png" />
      </div>
    </>
  );
};

export default MyImage;
