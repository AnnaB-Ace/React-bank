import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PrimaryHeader, PrimaryContent, Input, Button } from "../../components";
import { editCountryAction, getCountryByAction } from "../../store/actions";

// este es el que estamos editando
const EditCountry = (props) => {
  const { match } = props;
  const id = match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.country);
  console.log(state)
  const {
    getCountry: { data },
    updateCountry: { isLoading },
  } = state;

  console.log('data',data)
 


  const handleClose = () => history.goBack();

  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });

  useEffect(() => {
    if (data) {
      const { name, code } = data;
      setFormData({
        name: name,
        code: code,
      });
    }
  }, [data]);

  const getCountry = async () => dispatch(getCountryByAction(id));


  useEffect(() => {
      getCountry()
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const update =() =>dispatch(editCountryAction(id, formData))

  return (
    <>
      <PrimaryHeader subtitle="Editar Pais" handleClose={handleClose} />
      <PrimaryContent>
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
          text="Acualizar"
          isLoding={isLoading}
          disabled={isLoading}
          onClick={update}
        />
      </PrimaryContent>
    </>
  );
};

export default EditCountry;
