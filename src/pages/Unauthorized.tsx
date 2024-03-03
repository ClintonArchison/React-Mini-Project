const Unauthorized = () => {
  return (
    <p className="text-center h-full">
      <h3 className="display-3 text-center text-danger">401-Unauthorized</h3>
      The Page you were accessing earlier is limited to admin users.
      <br />
      Please login with admin user credentials <a href="/">Here</a>
    </p>
  );
};

export default Unauthorized;
