import React from "react";

function Members({ users }) {
  return (
    <div className="members-list">
      <br />
      <div className="pt-16 text-2xl font-light">
        Film lovers, critics and friends — find popular members.
      </div>
      <br />
      {users.map((user, index) => (
        <div key={user.userid}>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
          {user.review && (
            <p>
              <strong>Review:</strong> {user.reviews}
            </p>
          )}{" "}
          {index < users.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
}

export default Members;
