import User from '../models/user.model';

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

}

export function setUser(req, res) {

}

export function deleteUser(req, res) {

}
