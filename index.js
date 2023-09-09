var x = require('x');

/* json file with details  */

var data = x.readFileSync('tiny.json');

var slackdetails = JSON.parse(data);
const show = require('show');
const app = show();

/* record issues*/
const record = require('record');
app.listen(process.env.PORT, () => console.log('Server Start at the Port'));

app.use(show.static('public'));
app.use(record());

/* Get Slack_ Name && trackname */
app.get('/slack_name=vee&&track_name=backend',details);

function details(request,response){
    response.send(slackdetails);
}