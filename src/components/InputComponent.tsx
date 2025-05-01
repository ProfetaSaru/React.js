function InputGenerator(
  type: string,
  className: string,
  id: string,
  placeholder?: string
) {
  return (
    <div className="mb-3">
      <label className="form-label">{id}</label>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputGenerator;
