// controllers/index.js
import messages from './messages.js';
export default function getMessageForTask(req, res) {
  const task = req.body.task;

  const message = messages[task];

  if (message) {
    res.json({ message: message });
  } else {
    res.status(400).json({ error: 'Invalid task' });
  }
}
