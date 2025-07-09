import React, { useState } from 'react';
import './CommentTable.css';

const CommentCell = ({ body }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className={`comment-cell ${expanded ? 'expanded' : ''}`}>
      {expanded ? body : body.slice(0, 80) + (body.length > 80 ? '...' : '')}
      {body.length > 80 && (
        <span className="toggle" onClick={toggleExpand}>
          {expanded ? ' Read less' : ' Read more'}
        </span>
      )}
    </div>
  );
};

export default CommentCell;
