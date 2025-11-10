import { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { getUser } from "../../services/apiWaste";

function User() {
  const { userID } = useLocation().state;

  const [user, setUser] = useState({
    id: "userID",
    name: "",
    email: "",
    phone: "",
  });

  const { register } = useForm({
    defaultValues: async () => {
      const response = await fetch(`http://localhost:5285/api/users/${userID}`);
      const data = await response.json();
      return {
        name: data.name,
        phone: data.email,
        address: data.phone,
      };
    },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5285/api/users/${userID}`)
      .then((res) => console.log(res.data));
  }, []);

  const onSubmit = (data) => console.log(data);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault;
    axios
      .put(`http://localhost:5285/api/users/${userID}`, { user })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.data));
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Manage your account.</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Name</label>
          <input
            className="input grow"
            type="text"
            onChange={handleInput}
            name="name"
            {...register("name")}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Email</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              onChange={handleInput}
              name="email"
              {...register("email")}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              onChange={handleInput}
              name="phone"
              {...register("phone")}
              required
            />
          </div>
        </div>

        <div>
          <Button type="round" className="primary">
            Update the User
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function loader() {
  const user = await getUser(1);

  return Array.isArray(user) ? user : []; // always return an array
}

export default User;
