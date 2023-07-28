export const CardholderNameInput = () => {
    return (
      <>
        <label htmlFor="cardholderName">Nombre del titular:</label>
        <input
          type="text"
          id="cardholderName"
          className="border px-2"
          placeholder="Your name"
        />
      </>
    );
  };