import "./userprofile.css";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("userObject") || "{}");
  return (
    <div className="userprofile">
      <span>{JSON.stringify(user)}</span>
      <div className="container">
        <div className="shape">
          <div className="image"></div>
        </div>
        <h3>
          <span>{user.firstName}</span> <span>{user.lastName}</span>
        </h3>
        <h3 className="title">
          {user.roles.map((role: any) => role.name.toLocaleUpperCase())}
        </h3>
        <p>Email Id : {user.emailId}</p>
        <p>Web Designer, UI designer, photographer, web developer, etc</p>
        <div className="icons">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
