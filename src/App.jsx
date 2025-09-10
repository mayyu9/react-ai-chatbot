import styles from "./App.module.css";
import Chat from "./components/Chat/Chat";
import Controls from "./components/Controls/Controls";

const messages = [
  {
    "role": "user",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis cum enim quae nam repellat, nisi repudiandae mollitia. Debitis deleniti perspiciatis adipisci, aliquam quod soluta veritatis cupiditate veniam maiores eius!"
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
];

function App() {
  return(
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h1 className={styles.Title}>AI chatbot</h1>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  )
}

export default App
