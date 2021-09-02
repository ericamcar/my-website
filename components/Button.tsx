const Button: React.FC<{ classes: string }> = ({ children, classes }) => {
  return <div className={`button ${classes}`}>{children}</div>;
};

export default Button;
