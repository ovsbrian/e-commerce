export const ExpiryDateInput = () => {
    return (
      <>
        <label htmlFor="expiryDate">Vencimiento:</label>
        <input
          type="text"
          id="expiryDate"
          className="h-7 w-full px-2 border"
          placeholder="mm / yy"
          maxLength={4}
        />
      </>
    );
  };
  