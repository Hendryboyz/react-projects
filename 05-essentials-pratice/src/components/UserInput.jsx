export default function UserInput({ inputs, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">initial investment</label>
          <input
            name="initialInvestment"
            defaultValue={inputs.initialInvestment}
            type="number"
            onChange={(e) => {
              handleChange('initialInvestment', e.target.value);
            }}
            required />
        </p>
        <p>
          <label htmlFor="annualInvestment">annual investment</label>
          <input
            name="annualInvestment"
            defaultValue={inputs.annualInvestment}
            type="number"
            onChange={(e) => {
              handleChange('annualInvestment', e.target.value);
            }}
            required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">expected return</label>
          <input
            name="expectedReturn"
            defaultValue={inputs.expectedReturn}
            type="number"
            onChange={(e) => {
              handleChange('expectedReturn', e.target.value);
            }}
            required />
        </p>
        <p>
          <label htmlFor="duration">duration</label>
          <input
            name="duration"
            defaultValue={inputs.duration}
            type="number"
            onChange={(e) => {
              handleChange('duration', e.target.value);
            }}
            required />
        </p>
      </div>
    </section>
  )
}