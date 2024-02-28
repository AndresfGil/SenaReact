import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { starDeletingItem, startLoadingItems } from '../../Store/items/thunks';
import Modal from '../components/Modal';

const Items = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const productos = useSelector((state) => state.items.itemsShow);
  const isAdmin = user?.rol === 'admin';
  const [loaded, setLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = (producto) => {
    setSelectedItem(producto);
    setIsOpen(true);
  };

  const handleDelete = (producto) => {
    const { uid } = producto;
    dispatch(starDeletingItem(uid)); // Usar dispatch para llamar a la función y actualizar el estado
  };

  useEffect(() => {
    if (!loaded) {
      dispatch(startLoadingItems());
      setLoaded(true);
    }
  }, [dispatch, loaded]);


  return (
    <div>
      <div className="flex flex-wrap justify-center bg-yellow-200 bg-opacity-5 p-4 rounded-lg shadow-lg max-w-screen-lg mx-auto mt-20">
        {productos.map((producto, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="h-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
              <img className="w-full h-40 object-cover" src={producto.Url} alt={producto.Titulo} />
              <div className="px-6 py-4 flex-grow flex-col justify-center">
                <div className="font-bold text-xl mb-2">{producto.Titulo}</div>
                <p className="text-black-700 text-base">{producto.Descripcion}</p>
                <p className="text-black-700 text-base font-bold ">${producto.Precio}</p>
              </div>
              {isAdmin && (
              <div className="p-4 flex justify-end">
                <FaEdit className="text-blue-500 cursor-pointer mr-2" onClick={() => handleEdit(producto)}/>
                <FaTrash className="text-red-500 cursor-pointer" onClick={() => handleDelete(producto)} />
              </div>
              )}
            </div>
          </div>
        ))}
        {isAdmin && (
          <Modal producto={selectedItem} isOpenModal={isOpen}></Modal>
        )}
      </div>
    </div>
  )
}

export default Items;