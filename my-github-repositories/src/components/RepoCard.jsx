import { ExternalLink, Code, Star, Trash2 } from 'lucide-react';

function RepoCard({ repo, onClick, onDelete }) {
  return (
    <div className="bg-purple-700 hover:bg-purple-600 rounded-lg p-4 shadow-md transition-colors cursor-pointer">
      <div className="flex justify-between">
        <div className="w-5/6" onClick={onClick}>
          <h3 className="font-medium text-white text-lg">{repo.name}</h3>
          <p className="text-purple-200 text-sm truncate">
            {repo.description || 'No description available'}
          </p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(repo.html_url, '_blank');
            }}
            className="text-purple-200 hover:text-white"
            title="View on GitHub"
          >
            <ExternalLink size={18} />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-purple-200 hover:text-white"
            title="Delete repository"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex mt-3 gap-4">
        {repo.language && (
          <span className="flex items-center gap-1 text-sm text-purple-200">
            <Code size={14} />
            {repo.language}
          </span>
        )}
        
        <span className="flex items-center gap-1 text-sm text-purple-200">
          <Star size={14} />
          {repo.stargazers_count}
        </span>
      </div>
    </div>
  );
}

export default RepoCard;