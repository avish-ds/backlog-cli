import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:5000');

const data = {
    "Name": "test",
    "Description": "test",
    "Deadline": "test",
    "Priority": "test",
    "Status": "test",
    "TaskID": "test"
};

// const record = await pb.collection('backlog').create(data);

const record = await pb.collection('backlog').getOne('y7miyk4ucxawdvp', {
    expand: 'relField1,relField2.subRelField',
});

const resultList = await pb.collection('backlog').getList(1, 50, {
    filter: 'created >= "2022-01-01 00:00:00" '
});

console.log(resultList);