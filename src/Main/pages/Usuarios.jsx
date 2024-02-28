import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingUsers, updateUserRole } from '../../Store/auth';

const Usuarios = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.auth);
  const [selectedRoles, setSelectedRoles] = useState(Array(users.length).fill(null));

  const handleRoleChange = (index, role) => {
    const newSelectedRoles = [...selectedRoles]; 
    newSelectedRoles[index] = role; 
    setSelectedRoles(newSelectedRoles);
  };

  const handleSubmit = async () => {    
    for (const [index, user] of users.entries()) {
      const roleId = user.uid; 
      const newRole = selectedRoles[index];
      if (newRole !== null && newRole !== user.rol) { 

        await updateUserRole(roleId, newRole); 
        dispatch(startLoadingUsers())
      }
    }
  };

  return (
    <div className='bg-white w-full p-4'>
      {users.map((user, index) => (
        <div key={index} className="bg-white p-4 m-2 rounded-lg border border-gray-800">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <p className="font-bold">Nombre:</p>
              <p>{user.name}</p>
            </div>
            <div className="w-1/2">
              <p className="font-bold">Rol:</p>
              <select
                value={selectedRoles[index] || user.rol}
                onChange={(e) => handleRoleChange(index, e.target.value)}
                className="bg-green-50 rounded p-2 w-full"
                disabled={user.rol === "admin"}
              >
                <option value="cliente">Cliente</option>
                <option value="empleado">Empleado</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="w-1/2">
              <p className="font-bold">Direccion:</p>
              <p>{user.address}</p>
            </div>
            <div className="w-1/2">
              <p className="font-bold">Telefono:</p>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Cambiar Roles
      </button>
    </div>
  );
};

export default Usuarios;