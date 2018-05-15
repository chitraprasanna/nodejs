const MongoClient = require('mongodb').MongoClient;
const S = require('string')
const DB_NAME = 'onp_release';
const COLLECTION_SRVS = 'serviceSubscriptions';

exports.dbOperation = async function(host, userName, pwd){
    let client;

    try {
    var URL = 'mongodb://'+ getCredentials(userName, pwd) + host + ':27017';
        if(S(getCredentials(userName, pwd)).isEmpty()){
            console.log("connecting to "+ URL);
        }
        client = await MongoClient.connect(URL);
        console.log("connected to server");

        const db = client.db(DB_NAME);

        const srvsCol = db.collection(COLLECTION_SRVS);
        // let found = await srvsCol.findOne({"organizationId":"100005"});
        // console.log(" found: "+ found);
        let count = await srvsCol.count();
        console.log(" count: "+ count);

    } catch(err) {
        console.log(err.stack);
    }

    client.close();
};

function getCredentials(userName, pwd) {
 if(S(userName).isEmpty() || S(pwd).isEmpty()){
    return "";
 }

 return userName + ':' + pwd + '@';
}


