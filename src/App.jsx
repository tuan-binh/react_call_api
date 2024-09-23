import { useEffect, useState } from 'react';

import axios from 'axios';
import { notification } from 'antd';

function App() {
  const [data, setData] = useState(null);

  // fetch - call api

  // thư viện hỗ trợ axios

  useEffect(() => {
    // fetch('http://localhost:8080/api/v1/users')
    //   .then((resp) => resp.json())
    //   .then((resp) => console.log(resp));

    // 3 trạng thái Promise (lời hứa) -> pending -> fulfilled (thành công)
    //                                           -> rejected (thất bại)

    axios
      .get('http://localhost:8080/api/v1/users')
      .then((resp) => setData(resp.data.content))
      .catch((err) => {
        console.log(err);
        notification.error({ message: err.response.data.error, duration: 3 });
        // console.log();
      });
  }, []);

  return <>{data && data.map((item) => <p key={item.id}>{item.email}</p>)}</>;
}

export default App;
