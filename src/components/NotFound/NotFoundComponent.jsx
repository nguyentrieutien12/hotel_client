import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundComponent() {
  return (
    <div>
      <div className="notfount_container">
        <section class="notFound">
          <div class="img">
            <img
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
            />
            <img
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
          <div class="text_notfound">
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <h3>BACK TO HOME?</h3>
            <Link to="/" class="yes">
              YES
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
