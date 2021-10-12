import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Input, PrimaryContent, PrimaryHeader } from "../../components";
import { getStateByIdAction, editStateAction } from "../../store/actions/state";

const EditState = (props) => {
  const { match } = props;
  const id = match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();

    const state = useSelector((state) => state.state);
  const {
    getState: { data },
    updateState: { isLoading },
  } = state;
  console.log(data, isLoading)

  
  const handleClose = () => history.goBack();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });


  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name,
        code: data.code,
      });
    }
  }, [data]);

  const getState = async () => dispatch(getStateByIdAction(id));

  useEffect(() => {
    getState();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const update = () => dispatch(editStateAction(id, formData));

  return (
    <>
      <PrimaryHeader subtitle="Editar Estado" handleClose={handleClose} />
      <PrimaryContent>
        <Input
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Codigo"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
        <Button
          text="Actualizar"
          isLoding={isLoading}
          disabled={isLoading}
          onClick={update}
        />
      </PrimaryContent>
    </>
  );
};

export default EditState;
