import React from "react";
import avatar from "../assets/avatar.jpg";

function Members({ users }) {
  return (
    <div className="members-list">
      <br />
      <div className="intro-text pt-16 text-2xl font-light">
        Film lovers, critics and friends — find popular members.
      </div>
      <br />
      {users.map((user, index) => (
        <div key={user.userid} className="user-card">
          <div className="user-info">
            <img src={avatar} alt="Avatar" className="avatar" />
            <div>
              <span className="username">
                <strong>{user.username}</strong>
              </span>
              <span className="location">{user.location}</span>
            </div>
          </div>
          <hr />
          {user.reviews && user.reviews.length > 0 ? (
            <div className="reviews">
              <ul>
                {user.reviews.map((review, reviewIndex) => (
                  <li key={reviewIndex} className="review">
                    <strong className="text-yellow-600 review-text">
                      {review.movie.title} ({review.rating} / 5 Stars)
                    </strong>
                    <p className="review-text">{review.review_text}</p>
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No reviews available</p>
          )}
          {index < users.length - 1}
        </div>
      ))}
    </div>
  );
}

export default Members;
