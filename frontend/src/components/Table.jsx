export const Table = ({ data }) => {

  const dates = [...new Set(data.map(item => item.date))];
  const cities = [...new Set(data.map(item => item.location))];
  console.log('Data received in Table component:', data);

  const formatDate = (dateString) => {
    const options = {month: 'long', day: 'numeric', year: 'numeric'}
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>City</th>
            {dates.map((date) => (
              <th>{formatDate(date)}</th>
            ))}
          </tr>
        </thead>

        {cities.map((city) => (
          <tr key={city}>
            <th>{city}</th>
            {data.map((item, index) => {
              if (item.location === city) {
                return <td key={index}>{item.aqi}</td>;
              } else {
                return null;
              }
            })}
          </tr>
        ))}
      </table>

    </div>
  );
};