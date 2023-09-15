import React, { useEffect, useState } from 'react';
import axios from 'axios';
 

function UserList() {
  const [listOfUsers, setListOfUsers] = useState();
 

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setListOfUsers(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
       
      });
  }, []);

  return (
    <div className="user-list-container"> {/* Apply a CSS class for styling */}
      <h2>User List</h2>
      {listOfUsers&& (
        <ul>
          {listOfUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
