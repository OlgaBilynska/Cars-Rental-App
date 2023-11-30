import { useState } from "react";
import ModalCarItem from "../../components/ModalCarItem";

const CatalogPage = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>Catalog Page</div>
      <button onClick={toggleModal}>Click here</button>
      {ModalOpen && <ModalCarItem onClick={toggleModal} />}
    </>
  );
};

export default CatalogPage;
