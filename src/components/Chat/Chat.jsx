import Styles from './Chat.module.css';

const Chat = ({messages}) => {

    return(
        <div className={Styles.Chat}>
            {
            messages.map( ({role, content}, index) => (
            <div className={Styles.Message} key={index} data-role={role}>{content}</div>
        ))
    }
        </div>
    )
};

export default Chat;
