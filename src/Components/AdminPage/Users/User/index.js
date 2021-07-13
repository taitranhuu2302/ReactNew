import React, { useState } from "react";

const Index = (props) => {
  const [changePassword, setChangePassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);

  const changePass = () => {
    var password = props.user.password;
    var passwordHide = "";

    for (let i = 0; i < password.length; i++) {
      passwordHide += "*";
    }

    return passwordHide;
  };

  const onChange = (e) => {
    setChangePassword(e.target.value);
  };

  const onSave = (user) => {
    setClicked(!clicked);
    user.password = changePassword;
    props.onSave(user);
  };

  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.user.email}</td>
      <td>
        {clicked ? (
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="password"
            className="form-control"
          />
        ) : show ? (
          props.user.password
        ) : (
          changePass()
        )}
      </td>
      <td>
        <button
          onClick={() => setShow(!show)}
          className={
            show
              ? "btn shadow-none btn-eye fas fa-eye"
              : "btn shadow-none btn-eye fas fa-eye-slash"
          }
        />
      </td>
      <td>
        <span
          className={
            props.user.role
              ? "p-1 bg-warning rounded"
              : "p-1 bg-secondary rounded text-white"
          }
        >
          {props.user.role ? "Admin" : "Customer"}
        </span>
      </td>
      <td>
        <button
          onClick={() => setClicked(!clicked)}
          className="btn shadow-none fas fa-edit"
        />
        {clicked ? (
          <button
            onClick={() => onSave(props.user)}
            className="btn shadow-none fas fa-save"
          />
        ) : null}

        <button
          onClick={() => props.removeAccount(props.user.id, props.user.role)}
          className="btn shadow-none fas fa-trash"
        />
      </td>
    </tr>
  );
};

export default Index;
