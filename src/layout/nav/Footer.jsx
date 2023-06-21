export const Footer = () => {
  return (
    <>
      <footer className="border-t-2 text-black p-6 mt-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Enlaces útiles</h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="/contacto" className="hover:text-gray-300">
                    Contacto
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/faq" className="hover:text-gray-300">
                    Preguntas frecuentes
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/terminos-y-condiciones"
                    className="hover:text-gray-300"
                  >
                    Términos y condiciones
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
              <p>123 Calle Falsa, Montevideo, Uruguay</p>
              <p>Teléfono: +598 1234 5678</p>
              <p>Email: info@ejemplo.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
              <ul className="list-none flex">
                <li className="mr-4">
                  <a href="#">Facebook</a>
                </li>
                <li className="mr-4">
                  <a href="#">Instagram</a>
                </li>
                <li className="mr-4">
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between items-center">
            <p>© 2023 Ejemplo.com. Todos los derechos reservados.</p>
            <ul className="list-none flex">aa</ul>
          </div>
        </div>
      </footer>
    </>
  );
};
