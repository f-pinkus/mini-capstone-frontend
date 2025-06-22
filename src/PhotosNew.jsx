export function PhotosNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>New Photo</h1>
      <form> onSubmit={handleSubmit}
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Width: <input name="width" type="text" />
        </div>
        <div>
          Height: <input name="height" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}