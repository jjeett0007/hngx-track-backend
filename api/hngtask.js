module.exports = async (req, res) => {
    const { slack_name, track } = req.query;

    // Check if slack_name is not "Jet" or track is not "backend"
    if (!slack_name || slack_name !== 'Jet' || !track || track !== 'backend') {
        return res.status(400).json({ error: 'Invalid query parameters' });
    }

    // Get the current day and time in UTC format
    const current_day = new Date().toUTCString();
    const utc_time = new Date().toISOString();

    // Sample GitHub URLs
    const github_file_url = 'https://github.com/username/repo/blob/main/file_name.ext';
    const github_repo_url = 'https://github.com/username/repo-sample';

    // Respond with the JSON data
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
