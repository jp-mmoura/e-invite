import React from 'react';

const InviteCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Background with Gradient */}
      <div
        className="h-56 relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(122, 23, 69, 0.6), rgba(203, 79, 87, 0.6)),
            url('https://media.istockphoto.com/id/508293398/pt/foto/grupo-de-mulheres-amigos-desfrutar-refei%C3%A7%C3%A3o-no-restaurante.jpg?s=612x612&w=0&k=20&c=ykAs7pSTyWZheOHTeUnkWSensPdeM6GCrVP7bnW_DxE=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      ></div>

      {/* Card Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#7a1745]">Você está convidada!</h1>
        <p className="mt-2 text-gray-600">Junte-se a mim para uma noite de amigas!</p>

        <div className="mt-4">
          <p>
            <strong>Data:</strong> <span className="text-[#cb4f57]"> 5 de Dezembro, 2024</span>
          </p>
          <p>
            <strong>Hora:</strong> <span className="text-[#cb4f57]"> 19:30</span>
          </p>
          <p>
            <strong>Local:</strong>{' '}
            <span className="text-[#cb4f57]"> Rua xxx xxxxxx, xxx x, Bairro</span>
          </p>
        </div>

        {/* Button */}
    <button
        className="mt-6 text-white px-4 py-2 rounded transition duration-300"
        style={{
            backgroundColor: '#eb9961',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onClick={() =>
            window.open(
            'https://wa.me/5599999999999?text=Olá!%20Gostaria%20de%20confirmar%20minha%20presença%20na%20noite%20das%20amigas!',
            '_blank'
            )
        }
        >
        Confirme sua presença!
</button>

      </div>
    </div>
  );
};

export default InviteCard;
