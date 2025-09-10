import Styles from './Chat.module.css';

const Chat = ({messages}) => {
    const WELCOME_MESSAGE = {
        role: "assistant",
        content: "Hello! How can I assist you right now?",
    };

    return(
        <div className={Styles.Chat}>
            {
            [WELCOME_MESSAGE, ...messages].map( ({role, content}, index) => (
            <div className={Styles.Message} key={index} data-role={role}>{content}</div>
        ))
    }
        </div>
    )
};

export default Chat;
