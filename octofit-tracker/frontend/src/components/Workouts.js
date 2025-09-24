import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', apiUrl);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      });
  }, [apiUrl]);

  return (
    <div className="mb-4">
      <div className="card shadow">
        <div className="card-header bg-secondary text-white">
          <h2 className="mb-0">Workouts</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.name}</td>
                  <td>{workout.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
