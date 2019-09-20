import React from 'react';
import ChatsList from './components/ChatsListScreen/ChatsList';
import ChatsNavbar from './components/ChatsListScreen/ChatsNavbar';

const App: React.FC = () => {
  return (
    <div>
      <div>
        Whatsapp Clone
      </div>
      <ChatsList />
      <ChatsNavbar />
  </div>
);
};

export default App;
