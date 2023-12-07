import '../inputs/localInput.scss';

export const LocalInput: React.FC = () => {
  return (
    <div className='input-container'>
      <div >
        <input className="input is-primary" type="text" placeholder="Primary input"></input>
      </div>
    </div>
  )
}
