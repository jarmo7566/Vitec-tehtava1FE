import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your userID:
      </p>

      <input
        type="text"
        placeholder="Your userID"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72 mb-8"
      />

      {username !== "" && (
        <>
          <div className="block mb-4 text-sm text-stone-600 md:text-base">
            <button
              type="button"
              className="btn"
              onClick={() =>
                navigate(`/wastebin`, { state: { userID: username } })
              }
            >
              View your registered waste bins &rarr;
            </button>
          </div>
          <div className="block mb-4 text-sm text-stone-600 md:text-base">
            <button
              type="button"
              className="btn"
              onClick={() =>
                navigate(`/message/new`, { state: { userID: username } })
              }
            >
              Submit feedback about a service issue &rarr;
            </button>
          </div>
          <div className="block mb-4 text-sm text-stone-600 md:text-base">
            <button
              type="button"
              className="btn"
              onClick={() => navigate(`/user`, { state: { userID: username } })}
            >
              Edit and update personal contact information &rarr;
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default CreateUser;
