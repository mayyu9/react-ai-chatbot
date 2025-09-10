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

const Controls = () => {
    return(
        <div className={Styles.Controls}>
            <div className={Styles.TextAreaContainer}>
                <textarea
                    className={Styles.TextArea}
                    placeholder="Enter the message for chatbot"
                />
            </div>
            <div>
                <button type="button" className={Styles.Button}>
                    <SendSvg />
                </button>
            </div>
        </div>
    )

}

export default Controls;