import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from '../../Hooks/useForm';

import { startAddingItems, startLoadingItems, startUpdatingItem } from '../../Store/items/thunks';

const addFormFields = {
  Titulo: '',
  Precio: '',
  Descripcion: '',
  Url: ''
};

const Modal = ({ producto, isOpenModal }) => {
  const dispatch = useDispatch();
  
  const initialValues = producto ? producto : addFormFields;

  // Estado para controlar la apertura y cierre del modal
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Actualizar el estado isOpen cuando cambie isOpenModal
    setIsOpen(isOpenModal);
  }, [isOpenModal]);

  function closeModal() {
    // Cerrar el modal al hacer clic en el botón de cerrar
    setIsOpen(false);
  }

  // Manejar cambios en los campos del formulario
  const { Titulo, Precio, Descripcion, Url, onInputChange } = useForm(initialValues);

  // Manejar el envío del formulario
  const addSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar si hay un producto seleccionado
      if (producto) {
        // Si hay un producto seleccionado, llamar a startUpdating
        const result = await dispatch(startUpdatingItem({
          ...producto,
          Titulo,
          Precio,
          Descripcion,
          Url
        }));
        
        if (!result.ok) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Campos inválidos",
          });
        } else {
          dispatch(startLoadingItems());
          closeModal(); // Cerrar el modal después de actualizar
        }
      } else {
        // Si no hay producto seleccionado, llamar a startAddingItems
        const result = await dispatch(startAddingItems({
          Titulo,
          Precio,
          Descripcion,
          Url
        }));
        
        if (!result.ok) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Campos inválidos",
          });
        } else {
          dispatch(startLoadingItems());
          closeModal(); // Cerrar el modal después de agregar
        }
      }
    } catch (error) {
      // Manejar errores
    }
  };

  return (
    <>
      <div className="relative bottom-0 left-0 bg-transparent ">
        <button
          type="button"
          onClick={() => setIsOpen(true)} // Abrir el modal al hacer clic en el botón de agregar
          className="rounded-md bg-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/color/96/000000/add--v1.png"
            alt="add--v1"
          />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex flex-col justify-center items-center">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {producto ? 'Editar producto' : 'Agregar un nuevo producto'}
                  </Dialog.Title>
                  <form className="form-box" onSubmit={addSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Titulo"
                        name="Titulo"
                        value={Titulo}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Precio"
                        name="Precio"
                        value={Precio}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Descripcion"
                        name="Descripcion"
                        value={Descripcion}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Url Imagen"
                        name="Url"
                        value={Url}
                        onChange={onInputChange}
                      />
                    </div>

                    <button className="btn-submit-login" type="submit" onClick={() => { addSubmit(); closeModal(); }}>
                      {producto ? 'Actualizar' : 'Agregar'}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;