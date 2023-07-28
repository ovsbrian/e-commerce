export const EmailInput = () => {
    return (
      <>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          className="border px-2"
          placeholder="Your email"
        />
      </>
    );
  };