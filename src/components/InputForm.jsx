const InputForm = ({text, hendelInput, hendelSubmit}) => {
    return (
        <label>
            <input value={text} onChange={(e) => hendelInput(e.target.value)} />
            <button onClick={hendelSubmit}>Add Todo</button>
        </label>
    )
};

export default InputForm;
