import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  PrimaryHeader,
  PrimaryContent,
  Input,
  ErrorMessage,
} from "../../components";
import { createCountryAction } from "../../store/actions/country";

const CreateCountry = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.country);
  const {
    createCountry: { isLoading, error },
  } = state;
  const handleClose = () => history.goBack();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const save = async () => dispatch(createCountryAction(formData));

  return (
    <>
      <PrimaryHeader subtitle="Crear Pais" handleClose={handleClose} />
      <PrimaryContent>
        {error && <ErrorMessage {...{ error }} />}
        <Input
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Código"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
        <Button
          text="Guardar"
          isLoding={isLoading}
          disabled={isLoading}
          onClick={save}
        />
      </PrimaryContent>
    </>
  );
};

export default CreateCountry;
