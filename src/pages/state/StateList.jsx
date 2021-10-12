import Table from "rc-table";
import "./StateList.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ClipLoader } from "react-spinners";
import {
  Button,
  Modal,
  PrimaryContent,
  PrimaryHeader,
  PrimaryMenu,
} from "../../components";
import {
  deleteStateAction,
  getStatesAction,
  showDeleteModalAction,
} from "../../store/actions";

const columns = (history, openModal, setStateToDelete) => [
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
      const goToEdit = () => history.push(`/states/edit/${item._id}`);
      return <Button onClick={goToEdit} text="Editar" />;
    },
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    render: (item) => {
      const openModalFn = () => {
        setStateToDelete(item);
        openModal();
      };
      return <Button onClick={openModalFn} text="Delete" />;
    },
  },
];

const StateList = () => {
  const history = useHistory();
  const [stateToDelete, setStateToDelete] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((store) => store.state);
  const {
    getStates: { isLoading, data },
    deleteState: { isLoading: isLoadingDelete, showDeleteModal },
  } = state;
 

  useEffect(() => {
    dispatch(getStatesAction());
  }, []);

  const goToCrete = () => history.push("/states/create");

  const onClose = () => dispatch(showDeleteModalAction(false));

  const openModal = () => dispatch(showDeleteModalAction(true));

  const deleteState = async () =>
    dispatch(deleteStateAction(stateToDelete._id));

  return (
    <>
      <PrimaryHeader />
      <PrimaryMenu selected={2} />
      <PrimaryContent>
        <div className="state-list">
          <Button text="Agregar" onClick={goToCrete} />
        </div>
        {isLoading && <ClipLoader color="#1973b8" loading={true} size={20} />}
        {!isLoading && (
          <Table
            columns={columns(history, openModal, setStateToDelete)}
            data={data}
            rowKey="_id"
          />
        )}
      </PrimaryContent>
      <Modal opened={showDeleteModal} {...{ onClose }}>
        <div className="state-list__modal">
          <p>Esta seguro que desea eliminar el pais {stateToDelete.name} ?</p>
          <div className="state-list__modal-footer">
            <Button
              text="Cancelar"
              type="secondary"
              disabled={isLoadingDelete}
              onClick={onClose}
            />
            <Button
              text="Elminar"
              type="primary"
              disabled={isLoadingDelete}
              isLoding={isLoadingDelete}
              onClick={deleteState}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StateList;
