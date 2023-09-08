module.exports = async (req, res) => {
    const { slack_name, track } = req.query;

    if (!slack_name || slack_name !== 'Jet' || !track || track !== 'backend') {
        return res.status(400).json({ error: 'Invalid query parameters' });
    }

    const current_day = new Date().toUTCString();
    const utc_time = new Date().toISOString();

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

    res.status(200).json(response);
};
