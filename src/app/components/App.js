import React from 'react';
import axios from 'axios';

const fetchData = async () => {
  const resp = await axios.get('https://bakesaleforgood.com/api/deals');

  console.log(resp.data);
};

fetchData();

class App extends React.Component {
  render() {
    return (
      <div>App...</div>
    );
  }
}

export default App;
