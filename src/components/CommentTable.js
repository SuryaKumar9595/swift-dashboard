import React, { useMemo } from 'react';
import './CommentTable.css';
import Pagination from './Pagination';

const CommentTable = ({
  comments,
  search,
  setSearch,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
}) => {
  const handleSortDropdown = (column) => {
    if (sortBy !== column) {
      setSortBy(column);
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else if (sortOrder === 'desc') {
      setSortBy('');
      setSortOrder('');
    } else {
      setSortOrder('asc');
    }
  };

  const getSortIcon = (column) => {
    if (sortBy !== column) return '⇅';
    return sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '⇅';
  };

  const filtered = useMemo(() => {
    return comments.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [comments, search]);

  const sorted = useMemo(() => {
    if (!sortBy) return filtered;
    return [...filtered].sort((a, b) => {
      const valA = a[sortBy].toString().toLowerCase();
      const valB = b[sortBy].toString().toLowerCase();
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, sortBy, sortOrder]);

  const totalPages = Math.ceil(sorted.length / pageSize);
  const paginated = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="comment-table-wrapper">
      <div className="toolbar">
        <div className="sort-options">
          <label htmlFor="postID"></label>
          <select id="postID" onChange={() => handleSortDropdown('postId')}>
            <option value="Sort Post ID">Sort Post ID {getSortIcon('postId')}</option>
          </select>

          <label htmlFor="name"></label>
          <select id="name" onChange={() => handleSortDropdown('name')}>
            <option value="Sort Name">Sort Name {getSortIcon('name')}</option>
          </select>

          <label htmlFor="email"></label>
          <select id="email" onChange={() => handleSortDropdown('email')}>
            <option value="Sort Email">Sort Email {getSortIcon('email')}</option>
          </select>
        </div>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search name, email, comment..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="search-input"
        />

        {/* Page Size Selector */}
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      {/* Table */}
      <table className="comment-table">
        <thead>
          <tr>
            <th onClick={() => handleSortDropdown('postId')}>
              Post ID {getSortIcon('postId')}
            </th>
            <th onClick={() => handleSortDropdown('name')}>
              Name {getSortIcon('name')}
            </th>
            <th onClick={() => handleSortDropdown('email')}>
              Email {getSortIcon('email')}
            </th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((item) => (
            <tr key={item.id}>
              <td>{item.postId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td className="comment-cell">
                <span className="truncate-text" title={item.body}>
                  {item.body.length > 60 ? item.body.slice(0, 60) + '...' : item.body}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CommentTable;
