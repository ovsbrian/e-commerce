import PropTypes from 'prop-types';
export const InstallmentsSelect = ({ setInstallments }) => {
    const handleInstallmentsChange = (event) => {
        setInstallments(event.target.value);
      };
    
      return (
        <>
          <div className="flex justify-between ">
            <label htmlFor="installments">Cuotas:</label>
            <select id="installments" onChange={handleInstallmentsChange}>
              <option value="1">1 cuota</option>
              <option value="3">3 cuotas</option>
              <option value="6">6 cuotas</option>
              <option value="12">12 cuotas</option>
            </select>
          </div>
        </>
      );
    };

    
InstallmentsSelect.propTypes = {
    setInstallments: PropTypes.func.isRequired
  };