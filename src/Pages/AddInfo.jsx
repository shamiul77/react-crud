import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    username: yup.string().required("This field is required"),
    email: yup.string().required("Email is required*"),
    password: yup.string().required("Password is required*"),
    password2: yup.string().required("Password is required*"),
  })
  .required();
const defaultValues = { 
  username: "",
  email: "",
  password: "",
  password2: "",
};
function AddInfo() {
  const [state, setState] = useState([]);
  const [update, setUpdate] = useState(false);
  const [defaultValueState, setDefaultValueState] = useState(defaultValues);

  console.log({ defaultValueState });
  const {
    watch,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValueState,
  });

  const onSubmit = (data) => {
    if (update) {
      const filterDataWithoutOldUpdateData = state.filter(
        (_item, index) => index !== data.index
      );
      setState([...filterDataWithoutOldUpdateData, data]);
      setUpdate(false);
    } else {
      setState([...state, data]);
    }

    reset(defaultValues);
  };

  const handleDelete = (itemToDelete) => {
    setState(state.filter((item) => item !== itemToDelete));
  };

  const handleUpdate = (itemToUpdate) => {
    setUpdate(true);
    setDefaultValueState(itemToUpdate);
  };

  useEffect(() => {
    reset(defaultValueState);
  }, [defaultValueState]);

  return (
    <div className=" my-5  d-flex">
      <div className="col-5 container-fluid ">
        <h3 className="text-center">Registration Form</h3> <br />
        <form onSubmit={handleSubmit(onSubmit)} className=" bg-light px-5 py-5">
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState: { errors } }) => (
              <input
                className={
                  errors?.username ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter your username "
                type="text"
                {...field}
              />
            )}
          />
          {errors.username && <p className="text-danger">This is required.</p>}{" "}
          <br />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { errors } }) => (
              <input
                className=" form-control "
                placeholder="Enter your email"
                type="email"
                {...field}
              />
            )}
          />
          {errors.email && <p className="text-danger">This is required.</p>}
          <br />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { errors } }) => (
              <input
                className=" form-control"
                placeholder="Enter your password"
                type="password"
                {...field}
              />
            )}
          />
          {errors.password && <p className="text-danger">This is required.</p>}
          <br />
          <Controller
            name="password2"
            control={control}
            render={({ field, fieldState: { errors } }) => (
              <input
                className=" form-control"
                placeholder="Confirm your password"
                type="password"
                {...field}
              />
            )}
          />
          {errors.password2 && <p className="text-danger">This is required.</p>}
          <br />
          <div className="d-grid ">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="col-7">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {state?.map((item, index) => {
              return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td className="border-start d-flex">
                    <button
                      className="btn btn-info"
                      type="button"
                      onClick={() => handleUpdate({ ...item, index })}
                    >
                      update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AddInfo;
