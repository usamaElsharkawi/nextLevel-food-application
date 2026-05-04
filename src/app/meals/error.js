'use client';

import React from 'react';

export default function Error({ error, reset }) {
  // Senior Tip: In a real app, you would log the error to a service like Sentry here
  console.error('Meals Error:', error);

  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
      <button 
        onClick={() => reset()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#ff8a05',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Try Again
      </button>
    </main>
  );
}
