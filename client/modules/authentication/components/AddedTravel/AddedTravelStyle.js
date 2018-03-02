// Colors
import deepPurple from 'material-ui/colors/deepPurple';
import grey from 'material-ui/colors/grey';

export const styles = theme => ({
  container: {
    display: 'inline-flex',
    textAlign: 'center',
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  place: {
    backgroundColor: grey[300],
    margin: theme.spacing.unit,
    width: 300,
    maxHeight: 45,
    padding: 12,
  },
  arrow: {
    height: 50,
    width: 50,
    paddingTop: 12,
  },
  trash: {
    height: 40,
    width: 40,
    paddingTop: 20,
    fill: grey[600],
    '&:hover': {
      fill: grey[400],
      cursor: 'pointer'
    }
  }
});