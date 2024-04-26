export const Table = ({ data, componentFilter, countryFilter }) => {

  // const filter = "aqi"
  console.log(countryFilter)

  const dates = [...new Set(data.map(item => item.date))];

  let cities = []

  if (countryFilter == "") {
    cities = [...new Set(data.map(item => item.location))];
    console.log(cities)
  }
  else {
    cities = [countryFilter]
  }
  // const cities = [...new Set(data.map(item => item.location))];

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
              <th key={date}>{formatDate(date)}</th>
            ))}
          </tr>
        </thead>

        {cities.map((city) => (
          <tr key={city}>
            <th>{city}</th>
            {data.map((item, index) => {
              if (item.location === city) {
                return <td key={index}>{item[componentFilter]}</td>;
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