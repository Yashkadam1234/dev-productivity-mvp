const InsightBox = ({ insights }) => {
  return (
    <div>
      <h4>Insights:</h4>
      <ul>
        {insights.map((insight, i) => (
          <li key={i}>{insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default InsightBox;