const express = require('express');
const moment = require('moment');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name || slack_name !== 'Jet') {
    return res.status(404).json({ error: 'User not found' });
  }

  if (!track || track.toLowerCase() !== 'backend') {
    return res.status(400).json({ error: 'Incorrect track' });
  }

  const current_day = moment().utc().format('dddd');
  const utc_time = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  const github_file_url = 'https://github.com/jjeett0007/hngx-track-backend/blob/main/index.js';
  const github_repo_url = 'https://github.com/jjeett0007/hngx-track-backend';

  const response = {
    slack_name: slack_name,
    current_day: current_day,
    utc_time: utc_time,
    track: track,
    github_file_url: github_file_url,
    github_repo_url: github_repo_url,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});