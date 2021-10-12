import React from "react";
import "./CountryList.scss";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  PrimaryHeader,
  PrimaryMenu,
  PrimaryContent,
  Modal,
} from "../../components";
import Table from "rc-table";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {
  deleteCountryAction,
  getCountriesAction,
  showDeleteModalActionCountry,
} from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const columns = (history, openModal, setCountryToDelete) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    width: 100,
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    render: (item) => {
      const goToEdit = () => history.push(`/countries/edit/${item._id}`);
      return <Button onClick={goToEdit} text="Editar" />;
    },
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    render: (item) => {
      const openModalFn = () => {
        setCountryToDelete(item);
        openModal();
      };
      return <Button onClick={openModalFn} text="Delete" />;
    },
  },
];

const CountryList = () => {
  const history = useHistory();
  const [countryToDelete, setCountryToDelete] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((store) => store.country);
  const {
    getCoutries: { isLoading, data },
    deleteCountry: { isLoading: isLoadingDeleteCountry, showDeleteModalCountry },
  } = state;

  useEffect(() => {
    dispatch(getCountriesAction());
  }, []);

  const goToCrete = () => history.push("/countries/create");
  const onClose = () => dispatch(showDeleteModalActionCountry(false));
  const openModal = () => dispatch(showDeleteModalActionCountry(true));
  const deleteCountry = () =>
    dispatch(deleteCountryAction(countryToDelete._id));

  return (
    <>
      <PrimaryHeader />
      <PrimaryMenu selected={1} />
      <PrimaryContent>
        <div className="country-list">
          <Button text="Agregar" onClick={goToCrete} />
        </div>
        {isLoading && <ClipLoader color="#5486ac" loading={true} size={20} />}
        {!isLoading && (
          <Table
            columns={columns(history, openModal, setCountryToDelete)}
            data={data}
            rowKey="_id"
          />
        )}
      </PrimaryContent>
      <Modal opened={showDeleteModalCountry} {...{ onClose }}>
        <div className="country-list__modal">
          <p>Esta seguro que desea eliminar el pais {countryToDelete.name} ?</p>
          <div className="country-list__modal-footer">
            <Button
              text="Cancelar"
              type="secondary"
              disabled={isLoadingDeleteCountry}
              onClick={onClose}
            />
            <Button
              text="Elminar"
              type="primary"
              disabled={isLoadingDeleteCountry}
              isLoding={isLoadingDeleteCountry}
              onClick={deleteCountry}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CountryList;
