import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7531004454:AAHhH3g1b5gvZnmrfFEFEOurc43Jq4sZXio'; // Ganti dengan token bot Anda
    const chatId = '1101731156'; // Ganti dengan chat_id tujuan
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `Nama: ${name}\nNomor Telepon: ${phone}\nPesan: ${message}`;

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        alert('Pesan berhasil dikirim!');
        // Reset Form
        setName('');
        setPhone('');
        setMessage('');
      } else {
        alert('Gagal mengirim pesan. Coba lagi nanti.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim pesan.');
    }
  };

  return (
    <div id="contact" className="py-12 w-full sm:w-2/3 xl:w-/2 mx-auto">
      <h1 className="text-center poppins-bold text text-2xl mb-10 text-slate-900 dark:text-slate-50">
        Hubungi Kami
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full px-5 mx-auto flex flex-col gap-2 dark:text-slate-50"
      >
        <div>
          <label htmlFor="name" className="poppins-bold">
            Nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md p-2 focus:outline-1 outline-teal-500 border-none dark:text-slate-900"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="poppins-bold">
            Nomor Telepon
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Masukkan nomor telepon yg dapat di hubungi"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md p-2 focus:outline-1 outline-teal-500 border-none dark:text-slate-900"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="poppins-bold">
            Pesan
          </label>
          <div>
            <textarea
              className="w-full rounded-md p-2 focus:outline-1 outline-teal-500 border-none dark:text-slate-900"
              rows={5}
              placeholder="Masukkan pesan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <button className="bg-teal-500 w-full p-3 text-center rounded-full text-slate-100 hover:shadow-lg hover:shadow-teal-200 hover:bg-teal-400 transition-colors duration-300 poppins-bold my-5">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Contact;
