import React from 'react'

const addTodoItem = (data) => {
    return (
        <div>
            <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">{data.title}</span>
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button nClick={data.OnClickAddTitle} className="btn btn-outline-secondary" type="button" id="button-addon2">
    <i classname="fas fa-trash" /> add</button>
</div>

        </div>
    )
}

export default addTodoItem
