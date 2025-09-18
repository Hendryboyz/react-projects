import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const totalMaximum = Math.max(...props.dataPoints.map(data => data.value));
  return (
    <div className='chart'>
      {props.dataPoints.map(data =>
        <ChartBar
          key={data.label}
          value={data.value}
          max={totalMaximum}
          label={data.label}/>)}
    </div>
  );
}

export default Chart;