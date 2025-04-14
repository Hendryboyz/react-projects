import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result ({investments}) {
  const investmentReturns = calculateInvestmentResults(investments);
  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      { (investmentReturns && investmentReturns.length > 0) && investmentReturns.map(annualReturn => {
        const { year, valueEndOfYear, interest, annualInvestment } = annualReturn;
        const investedCapital = investments.initialInvestment + year * annualInvestment;
        const totalInterest = valueEndOfYear - investedCapital;
        return (
          <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}