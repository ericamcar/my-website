const NavToggle: React.FC<{
  isOpen: boolean;
  handleCheckboxChange: () => void;
}> = ({ isOpen, handleCheckboxChange }) => {
  return (
    <>
      <input
        type="checkbox"
        className="navigation-checkbox"
        id="navi-toggle"
        checked={isOpen}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="navi-toggle" className="navigation-button">
        <span className="navigation-icon"></span>
      </label>
    </>
  );
};

export default NavToggle;
