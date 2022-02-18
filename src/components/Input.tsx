const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="form-control"
      type="number"
      placeholder="Fibonacci Number"
      value={value}
      min="0"
      onChange={onChange}
    />
  );
};

export default Input;
