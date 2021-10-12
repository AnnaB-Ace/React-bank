import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  Button,
  ErrorMessage,
  Input,
  PrimaryContent,
  PrimaryHeader,
} from "../../components";
import { createStateAction, getCountriesAction } from "../../store/actions";

const CreateState = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.state);
  const {
    createState: { isLoading, error },
  } = state;
  const handleClose = () => history.goBack();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    country: "",
  });
  const stat = useSelector((store) => store.country);
  const {
    getCoutries: { data },
  } = stat;

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(getCountriesAction());
  }, []);

  const save = async () => dispatch(createStateAction(formData))
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
        <select name="country" onChange={handleChange} value={formData.country}>
          <option value="">Selecciona un país</option>
          {data.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
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

export default CreateState;
