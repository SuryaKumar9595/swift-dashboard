import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CommentTable from '../components/CommentTable';
import { getPersistedState, persistState } from '../utils/localStorageHelpers';
import './Dashboard.css';

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const state = getPersistedState();
    if (state) {
      setSearch(state.search);
      setSortBy(state.sortBy);
      setSortOrder(state.sortOrder);
      setPageSize(state.pageSize);
      setCurrentPage(state.currentPage);
    }
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  useEffect(() => {
    persistState({ search, sortBy, sortOrder, pageSize, currentPage });
  }, [search, sortBy, sortOrder, pageSize, currentPage]);

  return (
    <div>
      <Header name={user?.name || 'Loading...'} />
      <main className="container">
        <CommentTable
          comments={comments}
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          pageSize={pageSize}
          setPageSize={setPageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default Dashboard;
