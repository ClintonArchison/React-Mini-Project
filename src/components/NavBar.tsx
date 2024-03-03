export function NavBar({ data, username }: any) {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <h3 className="text-white ms-3">Welcome to Students Portal</h3>
        <form className="d-flex ms-auto" role="search">
          <a className="btn btn-warning me-2" type="submit" href="/">
            Log Out
          </a>
        </form>
        <div className="rounded-circle bg-light text-dark p-3 me-1">
          <b>{username[0]?.toUpperCase()}</b>
        </div>
        <div>
          <p className="mb-0 ms-1 p-3 text-white">
            <b> {username?.toUpperCase()}</b>
          </p>
        </div>
      </nav>
    </>
  );
}
