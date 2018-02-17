import modelCas from '../models/cas.model';

var casSession; //To access at informations about cas

export function connection(req, res) {

    casSession = req.session.cas;
    res.send('Should be logged-in : <br/>' + JSON.stringify(casSession));
}

//To access at the cas
export function getCas(){
    return modelCas.casClient;
}

export default casSession;