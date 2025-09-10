import { useState } from 'react';
import Styles from './Controls.module.css';

const SendSvg = () => {
    return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
    </svg>
    )
};

const Controls = ({onSend}) => {
    const [content, setContent] = useState("")

    const handleTextChange = (event) => {
        setContent(event.target.value);
    }

    const handleSendBtnClick = () => {
        if(content.length > 0) {
            onSend(content);
            setContent("");
        }
    }

    const handleEnterPress = (event) => {
        if(event.key === 'Enter' && !event.shiftKey) {
            handleSendBtnClick()
        }
    }

    return(
        <div className={Styles.Controls}>
            <div className={Styles.TextAreaContainer}>
                <textarea
                    className={Styles.TextArea}
                    placeholder="Enter the message for chatbot"
                    onChange={handleTextChange}
                    value={content}
                    onKeyDown={handleEnterPress}
                />
            </div>
            <div>
                <button 
                    type="button" 
                    className={Styles.Button}
                    onClick={handleSendBtnClick}
                >
                    <SendSvg />
                </button>
            </div>
        </div>
    )

}

export default Controls;