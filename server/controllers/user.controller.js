import User from '../models/user.model';
import sanitizeHtml from 'sanitize-html';

export function getUsers(req, res) {
	User.find().exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

export function getUser(req, res) {

}

export function addUser(req, res) {
	if (!req.body.user.name) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);

  // Let's sanitize inputs
  newUser.name = sanitizeHtml(newUser.name);

  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}

export function setUser(req, res) {

}

export function deleteUser(req, res) {

}
