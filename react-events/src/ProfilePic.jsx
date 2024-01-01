//
//
//
//
function ProfilePic() {
  const imgUrl = "./src/assets/profile.jpeg";

  const handleClick = (e) => {
    e.target.style.scale = "2";
  };

  return <img onClick={(e) => handleClick(e)} src={imgUrl} />;
}
export default ProfilePic;
