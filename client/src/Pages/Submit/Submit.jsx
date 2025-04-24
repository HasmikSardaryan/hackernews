

function Submit(){
    return(
        <>
        <div>
        <div class="submit-container">
    <div class="header">Y Submit</div>

    <form class="submit-form">
      <label>title<br />
        <input type="text" name="title" />
      </label><br />

      <label>url<br />
        <input type="text" name="url" />
      </label><br />

      <label>text<br />
        <textarea name="text" rows="5"></textarea>
      </label><br />

      <button type="submit">submit</button>
    </form>

    <p class="note">
      Leave url blank to submit a question for discussion. If there is no url, text will appear at the top of the thread. If there is a url, text is optional.
      <br />
      You can also submit via <a href="#">bookmarklet</a>.
    </p>
  </div>
        </div>
        </>
    )
}


export default Submit;