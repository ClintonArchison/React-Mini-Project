const Unauthorized = () => {
  return (
    <p className="text-center h-full">
      The Page you were accessing earlier is limited to admin users.
      <br />
      Please login with admin user credentials <a href="/">Here</a>
    </p>
  );
};

export default Unauthorized;
