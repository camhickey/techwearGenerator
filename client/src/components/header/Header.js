import React from 'react';

import "./Header.css";

export default function Header() {

  return (
    <div className="navigation">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">← HOME</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    </div>
  );
}