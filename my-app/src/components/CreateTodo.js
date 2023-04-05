const CreateTodo = ({ onChangeForm, handleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>Todo</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            name="todo"
                            placeholder="To do"
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            name="category"
                            placeholder="category"
                        />
                    </div>
                    <div className="input-group">
                        <label>complete</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            name="complete"
                            placeholder="is it complete?"
                        />
                    </div>
                    <button
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;