import React from "react";

function Article({ title, date, preview, minutes }) {
  const defaultDate = "January 1, 1970"; // Default date if not provided
  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      {minutes && <p>Minutes to Read: {minutes}</p>} {/* Display minutes to read if available */}
    </article>
  );
}

export default Article;
