export const Timer = ({ hours, minutes, seconds, status }) => {
  return (
    <div>
      <h1>{ twoDigits(hours) } : { twoDigits(minutes) } : { twoDigits(seconds) }</h1>
      <h2>Status: { status }</h2>
    </div>
  )
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0');
