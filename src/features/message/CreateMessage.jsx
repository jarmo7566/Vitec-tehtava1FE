import { useState } from "react";
import { Form, useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import axios from "axios";

function CreateMessage() {
  const { userID } = useLocation().state;
  const [message, setMessage] = useState({
    user_id: userID,
    message: "",
    created_at: Date.now().toString(),
  });

  const handleInput = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5285/api/feedbacks", { message })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to send message? Let&apos;s go!
      </h2>

      <Form onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Message</label>
          <input
            placeholder=""
            className="input grow"
            type="text"
            onChange={handleInput}
            name="message"
            required
          />
        </div>

        <div>
          <Button className="primary">Send the Message</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateMessage;
