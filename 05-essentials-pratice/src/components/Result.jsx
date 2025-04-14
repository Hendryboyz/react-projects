import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result ({investments}) {
  const investmentResults = calculateInvestmentResults(investments);
  let totalInterest = 0;
  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      { (investmentResults && investmentResults.length > 0) && investmentResults.map(annualResult => {
        const investedCapital = investments.initialInvestment + annualResult.year * annualResult.annualInvestment;
        totalInterest += annualResult.interest;
        return (
          <tr key={annualResult.year}>
            <td>{annualResult.year}</td>
            <td>{formatter.format(annualResult.valueEndOfYear)}</td>
            <td>{formatter.format(annualResult.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}