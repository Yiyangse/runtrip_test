import React, { useState } from 'react';
import './index.css'; // CSS 파일 import

const Board: React.FC = () => {
  // 게시물 목록을 관리할 상태와 새로운 게시물을 입력받을 상태를 정의합니다.
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
  });

  // 제목 입력 필드의 값이 변경될 때 호출되는 이벤트 핸들러입니다.
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, title: e.target.value });
  };

  // 내용 입력 필드의 값이 변경될 때 호출되는 이벤트 핸들러입니다.
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, content: e.target.value });
  };

  // 게시물 작성 버튼을 클릭했을 때 호출되는 함수입니다.
  const handlePostSubmit = () => {
    // 제목과 내용이 입력되었는지 확인합니다.
    if (newPost.title.trim() === '' || newPost.content.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    // 새로운 게시물 객체를 생성합니다. 임시 id는 현재 시간으로 설정합니다.
    const newPostWithId = {
      ...newPost,
      id: Date.now(),
    };

    // 새로운 게시물을 게시물 목록에 추가합니다.
    setPosts([...posts, newPostWithId]);

    // 입력 필드를 초기화합니다.
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className='board-container'>
      <h2>게시판</h2>
      <div className='new-post-form'>
        {/* 제목 입력 필드 */}
        <input
          type='text'
          placeholder='제목'
          value={newPost.title}
          onChange={handleTitleChange}
        />
        {/* 내용 입력 필드 */}
        <textarea
          placeholder='내용'
          value={newPost.content}
          onChange={handleContentChange}
        />
        {/* 게시물 작성 버튼 */}
        <button onClick={handlePostSubmit}>게시물 작성</button>
      </div>
      <div className='posts-container'>
        {/* 게시물 목록을 표시합니다. */}
        {posts.map((post) => (
          <div key={post.id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
