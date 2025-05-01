function Header({ navigateToHome }) {
    return (
      <header className="bg-purple-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-2 hover:text-purple-200 transition-colors"
          >
            <Github size={24} />
            <span className="text-lg font-semibold">GitHub Portfolio</span>
          </button>
          
          <nav>
            <button 
              onClick={navigateToHome}  
              className="px-4 py-2 hover:bg-purple-700 rounded-md transition-colors"
            >
              Home
            </button>
          </nav>
        </div>
      </header>
    );
  }
  