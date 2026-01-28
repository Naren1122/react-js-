import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="p-4 bg-slate-800 text-white flex justify-between items-center">
      <h1 className="font-bold">ReactMastery</h1>

      <div>
        {user ? (
          /* If user is NOT null (Logged In) */
          <div className="flex items-center gap-4">
            <span>
              Hi, <span className="text-yellow-400 font-bold">{user.name}</span>
            </span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          /* If user IS null (Logged Out) */
          <button
            onClick={() => login("Alex")}
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            Login as Alex
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
