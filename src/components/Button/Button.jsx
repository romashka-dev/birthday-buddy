const Button = ({ onClick, text }) => {
  return (
    <button type="button" className="btn btn-block" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
