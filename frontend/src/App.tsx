import React from 'react';
import './App.css';
import PostComponent from './components/postComponents';
const posts = [
  {
    title: 'Blog Post Title',
    date: 'June 10, 2024',
    author: 'Author',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    title: 'Another Blog Post',
    date: 'June 9, 2024',
    author: 'Author',
    content:
      'Suspendisse potenti. Fusce at libero nec augue varius sodales. Nam elementum volutpat dolor, at condimentum ex dictum quis.',
  },
  // Adicione mais posts conforme necessário
];

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <header className="bg-gray-800 p-6 text-center border-b border-gray-700">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">
          Mateus Vieites Blog
        </h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/website" className="text-purple-400 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-purple-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto mt-8 p-4">
        <PostComponent />
      </main>
      <footer className="bg-gray-800 p-4 text-center mt-8 border-t border-gray-700">
        <p className="text-gray-400">
          &copy; 2024 Mateus Vieites Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
