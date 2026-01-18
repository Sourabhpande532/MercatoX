import { useState } from "react";
import { useAddress } from "../context/AddressContext";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const { addAddress } = useAddress();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAddress(form);
    setForm({ name: "", street: "", city: "", state: "", zip: "", phone: "" });
  };
  return (
    <div>
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
