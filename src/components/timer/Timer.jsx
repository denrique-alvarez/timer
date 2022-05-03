export const Timer = ({ hours, minutes, seconds, status }) => {
  return (
    <div>
      <h1>{ hours } : { minutes } : { seconds }</h1>
      <h2>Status: { status }</h2>
    </div>
  )
}
