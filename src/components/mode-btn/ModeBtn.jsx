export const ModeBtn = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={ onClick }>
        { name }
      </button>
    </div>
  )
}