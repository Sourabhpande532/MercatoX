import { useState } from "react";
import { useAddress } from "../context/AddressContext";
import { useEffect } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [editingId, setEditingId] = useState(null);
  console.log(editingId);

  const { addAddress, address, deleteAddress, updateAddress } = useAddress();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateAddress(editingId, form);
      setEditingId(null);
    } else {
      await addAddress(form);
    }
    setForm({ name: "", street: "", city: "", state: "", zip: "", phone: "" });
  };

  const onEdit = (addrs) => {
    setEditingId(addrs._id);
    setForm({
      name: addrs.name,
      street: addrs.street,
      city: addrs.city,
      state: addrs.state,
      zip: addrs.zip,
      phone: addrs.phone,
    });
  };

  useEffect(() => {}, [address]);
  return (
    <div>
      <div className='card shadow-sm p-3'>
        <h2 className='border-bottom'>Saved address</h2>
        {address.map((each) => (
          <div key={each._id}>
            <h5>
              {each.name}({each.phone}-{each._id})
            </h5>
            <p className='fw-light'>
              {each.street}-{each.city},{each.city},{each.state},{each.zip}
            </p>
            <button
              className='btn btn-outline-secondary ms-2'
              onClick={() => onEdit(each)}>
              Edit
            </button>
            <small className='px-2'></small>
            <button
              className='btn btn-outline-danger'
              onClick={() => deleteAddress(each._id)}>
              Delete
            </button>
            <hr />
          </div>
        ))}
      </div>
      <br />
      <div className='card shadow-sm p-3 mt-3 mb-4'>
        <h5 className='border-bottom pb-3'>Add Address</h5>
        <form onSubmit={handleSubmit} className='mt-3'>
          <div className='row g-3'>
            <div className='col-12'>
              <input
                className='form-control'
                placeholder='name'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className='col-12'>
              <input
                className='form-control'
                placeholder='street'
                value={form.street}
                onChange={(e) => setForm({ ...form, street: e.target.value })}
              />
            </div>
            <div className='col-md-6'>
              <input
                className='form-control'
                placeholder='city'
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>
            <div className='col-md-6'>
              <input
                className='form-control'
                placeholder='state'
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              />
            </div>
            <div className='col-md-6'>
              <input
                className='form-control'
                placeholder='zip'
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
              />
            </div>
            <div className='col-md-6'>
              <input
                className='form-control'
                placeholder='phone'
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>
          <button className='btn btn-primary w-100 mt-3'>Add Address</button>
        </form>
      </div>
    </div>
  );
};
export { Profile };
