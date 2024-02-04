export function NavBar() {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <h3 className="text-white ms-3">Welcome to Students Portal</h3>
        <form className="d-flex ms-auto" role="search">
          <button className="btn btn-warning me-2" type="submit">
            Log Out
          </button>
        </form>
        <div className="rounded-circle bg-light text-dark p-3 me-2">CA</div>
        <p className="mb-0 ms-1 p-3 text-white">
          <b> Clinton Archison</b>
        </p>
      </nav>
    </>
  );
}