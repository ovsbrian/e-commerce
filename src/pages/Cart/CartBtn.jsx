export const BtnCart = ({ color, children,colorText, pad }) => {
    return (
      <>
        <button className={`p-${pad} bg-${color} rounded-full w-full text-${colorText} my-2 flex justify-center items-center` }>
          {children}
        </button>
      </>
    );
  };
  