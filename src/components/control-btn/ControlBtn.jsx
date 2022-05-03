export const ControlBtn = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={ onClick }>
        { name }
      </button>
    </div>
  )
}